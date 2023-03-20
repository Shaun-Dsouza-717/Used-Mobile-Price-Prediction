from django.urls import path
from . import views

urlpatterns = [
    path('predictprice/', views.predict_price)
]