import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react'
import { FormProps } from '../interface/FormProps';
// import './Card.css'

const DeviceForm: React.FC<FormProps> = ({formDetails,setFormDetails}) => {

  let deviceOptions:Array<string> = [
    "Honor",
    "Others",
    "HTC",
    "Huawei",
    "Lava",
    "Lenovo",
    "LG",
    "Micromax",
    "Nokia",
    "Oppo",
    "Samsung",
    "Vivo",
    "Xiaomi",
    "ZTE",
    "Apple",
    "Asus",
    "Alcatel",
    "Acer",
    "BlackBerry",
    "Celkon",
    "Coolpad",
    "Gionee",
    "Google",
    "Karbonn",
    "Meizu",
    "Microsoft",
    "Motorola",
    "OnePlus",
    "Panasonic",
    "Realme",
    "Sony",
    "Spice",
    "XOLO",
  ];

  return (
    <>
      <h1 className="text-header"> Predict price now!</h1>
      <div className="select-container">
        <IonLabel className="text-label">Select device brand</IonLabel>
        <IonItem className="select-option">
          <IonSelect
            interface="popover"
            placeholder="Select"
            onIonChange={(e) =>
              setFormDetails({ ...formDetails, device_brand: e.target.value })
            }
            value={formDetails.device_brand}
          >
            {deviceOptions.map((deviceOption) => (
              <IonSelectOption key={deviceOption} value={deviceOption}>
                {deviceOption}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
      </div>
      <div className="select-container">
        <IonLabel className="text-label">Select operating system</IonLabel>
        <IonItem className="select-option">
          <IonSelect
            placeholder="Select"
            interface="popover"
            onIonChange={(e) =>
              setFormDetails({ ...formDetails, os: e.target.value })
            }
            value={formDetails.os}
          >
            <IonSelectOption value="iOS">iOS</IonSelectOption>
            <IonSelectOption value="Android">Android</IonSelectOption>
            <IonSelectOption value="Windows">Windows</IonSelectOption>
            <IonSelectOption value="Others">Others</IonSelectOption>
          </IonSelect>
        </IonItem>
      </div>
      <div className="select-container">
        <IonLabel className="text-label">Select device type</IonLabel>
        <IonItem className="select-option">
          <IonSelect
            placeholder="Select"
            interface="popover"
            onIonChange={(e) =>
              setFormDetails({ ...formDetails, device_type: e.target.value })
            }
            value={formDetails.device_type}
          >
            <IonSelectOption value="Phone">Phone</IonSelectOption>
            <IonSelectOption value="Tablet">Tablet</IonSelectOption>
          </IonSelect>
        </IonItem>
      </div>
    </>
  );
};

export default DeviceForm