import pandas as pd
import numpy as np
import pickle
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR

def predict_device_used_price(device,train_cols,scalar,model):
# To predict value of used device , takes the device object, training data columns, scalar and model as parameter 

  data = {
    'device_brand':device['device_brand'],
    'os':device['os'],
    'screen_size':device['screen_size'],
    '4g':device['4g'],
    '5g':device['5g'],
    'rear_camera_mp':device['rear_camera_mp'],
    'front_camera_mp':device['front_camera_mp'],
    'internal_memory':device['internal_memory'],
    'ram':device['ram'],
    'battery':device['battery'],
    'weight':device['weight'],
    'release_year':device['release_year'],
    'days_used': device['days_used'],
    'normalized_new_price':device['normalized_new_price'] / 100,
    'device_type':device['device_type'],
    'device_code':device['device_code']
  }

# Converting the device object to a dataframe 
  pred_df = pd.DataFrame(data, index=[0])
  print("step 1 passed")

# One hot encoding the data to convert categorical data to numeric data 
  pred_ohe_df = pd.get_dummies(pred_df,None,"_",columns=['os', '4g', '5g', 'device_type'])
  print("step 2 passed")

# Getting the columns of the predicted values after encoding
  columns_encoded = pred_ohe_df.columns.tolist()
  print("step 3 passed")

# Getting all the columns present in train and absent in prediction
  columns_missing = list(set(train_cols) - set(columns_encoded))
  print("step 4 passed")

# Filling all the missing columns with 0 to match the pred cols with the test cols
  pred_ohe_df = pred_ohe_df.reindex(columns=train_cols,fill_value=0)
  print("step 5 passed")

# Removing unwanted columns
  drop_cols = ['device_brand','normalized_used_price']
  X = pred_ohe_df.drop(columns=drop_cols,axis=1)
  print("step 6 passed")

# Standardizing the values of prediction 
  pred_scaled = scalar.transform(X)
  print("step 7 passed")
# Predicting the values and returning the final used_price
  y_pred = model.predict(pred_scaled)
  print("step 8 passed")

  return y_pred[0]


def get_prods():
    # Load the pickled objects into memory
    with open('./price_predictor/wodel.pickle', 'rb') as f:
        train_cols, scalar, model = pickle.load(f)

    return train_cols, scalar, model


brand_to_code = {'Honor': 10,
 'Others': 23,
 'HTC': 9,
 'Huawei': 11,
 'Lava': 14,
 'Lenovo': 15,
 'LG': 13,
 'Micromax': 17,
 'Nokia': 20,
 'Oppo': 22,
 'Samsung': 26,
 'Vivo': 29,
 'Xiaomi': 31,
 'ZTE': 32,
 'Apple': 2,
 'Asus': 3,
 'Alcatel': 1,
 'Acer': 0,
 'BlackBerry': 4,
 'Celkon': 5,
 'Coolpad': 6,
 'Gionee': 7,
 'Google': 8,
 'Karbonn': 12,
 'Meizu': 16,
 'Microsoft': 18,
 'Motorola': 19,
 'OnePlus': 21,
 'Panasonic': 24,
 'Realme': 25,
 'Sony': 27,
 'Spice': 28,
 'XOLO': 30}


def get_brand_code(brand):
  device_code = brand_to_code.get(brand, -1)
  return device_code