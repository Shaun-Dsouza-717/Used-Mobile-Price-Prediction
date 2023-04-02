#  Import Modules
import json
from . import utils
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def render_homepage(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())


@csrf_protect
@csrf_exempt
def predict_price(request):
    if request.method == 'POST':
        # Check the Content-Type header of the request
        content_type = request.headers.get('Content-Type')
        if content_type != 'application/json':
            return JsonResponse({'error': 'Invalid Content-Type header'}, status=400)

        # Access the JSON data sent in the request body
        try:
            json_data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)

        # Access the data in the JSON object
        my_data = json_data["device"]

        # Getting the device code of the respcective device
        my_data['device_code'] = utils.get_brand_code(my_data['device_brand'])

        #  Loading the model, scalar and train columns
        train_cols, scalar, model = utils.get_prods()

        # Predicting the price
        preds = utils.predict_device_used_price(my_data,train_cols,scalar,model)*100

        print(preds)

        # Validate and process the price data 
        if preds:
            processed_data = preds
            return JsonResponse({"price":processed_data}, status=200)
        else:
            return JsonResponse({'error': 'Missing data in request'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

