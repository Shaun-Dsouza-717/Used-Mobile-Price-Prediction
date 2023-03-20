#  Import Modules
import json
from . import utils
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect

# Views start from here.
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
        # my_data = json_data

        my_data['device_code'] = utils.get_brand_code(my_data['device_brand'])

        train_cols, scalar, model = utils.get_prods()

        preds = utils.predict_device_used_price(my_data,train_cols,scalar,model)*100
        # absolute_path = os.path.dirname(os.path.abspath(__file__))
        # pickle_path = os.path.join(absolute_path, '/model.pickle')
        # print(absolute_path)

        # with open('model.pickle', 'rb') as f:
        #     predict_function, train_cols, scalar, model = pickle.load(f)
        print(preds)

        # print(train_cols)
        
        # Validate and process the data


        if my_data:
            processed_data = preds
            return JsonResponse({"value":processed_data}, status=200)
        else:
            return JsonResponse({'error': 'Missing data in request'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)



# Create your views here.
