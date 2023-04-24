# Used-Mobile-Price-Prediction

<p align="center">
  <h2 align="center">REAL ESTATE PRICE PREDICTION</h2>

  <p align="center">
    This Project is a Real Estate Price Prediction using Machine Learning.
  </p>
</p>

## Table of Contents 
* [Project Introduction](#project-introduction)
* [Techolgies Used](#technologies-used)
* [Project Description](#project-description)
* [Getting Started](#getting-started)
  * [Pre-requisites](#pre-requisites)
* [Installation](#installation)
* [License](#license)
* [Contributing Guidelines](#contributing-guidlines)

## Project Introduction

In today's world, mobile phones have become a necessity for most individuals. With the rapid advancements in technology, there is a constant influx of new and updated models in the market, leading to a plethora of options for consumers to choose from. However, the cost of these mobile phones can vary significantly based on factors such as the brand, features, and specifications.
As a result, predicting the price of a mobile phone accurately has become a crucial task for both buyers and sellers.
The aim of this project is to predict the price of a mobile phone based on various specifications such as the brand, display, camera, memory, and battery.

### Technologies Used

* Python as Programming Language
* Pandas for Data Cleaning
* Seaborn & Matplotlib for Data Visualization
* Sklearn for Model Building
* Ionic React for Frontend
* Django for Backend Server

## Project Description

I have built a Used Mobile Price Prediction Model and Frontend using fundamentals of Data Scicence and Machine Learning like
Feature Engineering, Data Cleaning, Outlier Detection, and Model Evaluation.
I have implemented a Support Vector Regressor Model to predict the Used Mobile Price. 

The Project has an interactive website build using Ionic React and a Django Server as backend where inputs are taken and predictions are made.

In the Website the User Must Enter Various Fields related to the hardware and software of a device along with its actual new price and the year of purchase.
After entering the details, the user can click on the Predict button to get the predicted price of the device.

![frontend]


## Getting Started 

To Setup the Project, you need to install the following:

### Pre-Requisites:

1. Install Git Version Control
[ https://git-scm.com/ ]

2. Install Python Latest Version
[ https://www.python.org/downloads/ ]


## Installation

**1. Create a Folder where you want to save the project**

**Install Virtual Environment First**
```
$  pip install pipenv
```

**Create Virtual Environment**

```
$  pipenv shell
```

**3. Clone this project**
```
git clone 
```

Then, Enter the project
```
cd Used-Mobile-Price-Prediction
```

**5. Run the project**

* Start Flask Backend Server (In the virtual environment):
```
$  python manage.py runserver
```

* cd react-frontend & cd price-predictor-frontend.
```
$  npm install
```

* Start Ionic React Frontend Server:
```
$  ionic serve
```

---
The dataset used in this project is from Kaggle which is the ["Used handheld device data"](https://www.kaggle.com/datasets/ahsan81/used-handheld-device-data).

---