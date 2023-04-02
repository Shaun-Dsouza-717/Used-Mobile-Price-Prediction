import {
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";
import "./Card.css";
import { FormProps } from "../interface/FormProps";


const HardwareExtraInfoForm: React.FC<FormProps> = ({formDetails,setFormDetails}) => {
      return (
        <>
          <h1 className="text-header" style={{ width: 335 }}>
            Upgrade, for less!
          </h1>
          <div className="network-container">
            <div className="select-network">
              <IonLabel className="text-label">Enter RAM</IonLabel>
              <IonItem className="select-option network">
                <IonInput
                  placeholder="Eg. 4 GB"
                  type="number"
                  step="0.001"
                  label=""
                  onIonChange={(e) => {
                    setFormDetails({
                      ...formDetails,
                      ram: parseFloat(e.target.value?.toString() || "0"),
                    });
                  }}
                ></IonInput>
              </IonItem>
            </div>
            <div className="select-network">
              <IonLabel className="text-label">Enter battery</IonLabel>
              <IonItem className="select-option network">
                <IonInput
                  placeholder="Eg. 5000 MaH"
                  type="number"
                  step="0.001"
                  label=""
                  onIonChange={(e) => {
                    setFormDetails({
                      ...formDetails,
                      battery: parseFloat(e.target.value?.toString() || "0"),
                    });
                  }}
                ></IonInput>
              </IonItem>
            </div>
          </div>
          <div className="select-container">
            <IonLabel className="text-label">Enter rear camera MP</IonLabel>
            <IonItem className="select-option">
              <IonInput
                placeholder="Eg. 12 MP"
                type="number"
                step="0.001"
                label=""
                onIonChange={(e) => {
                  setFormDetails({
                    ...formDetails,
                    rear_camera_mp: parseFloat(
                      e.target.value?.toString() || "0"
                    ),
                  });
                }}
              ></IonInput>
            </IonItem>
          </div>
          <div className="select-container">
            <IonLabel className="text-label">Enter front camera MP</IonLabel>
            <IonItem className="select-option">
              <IonInput
                placeholder="Eg. 6 MP"
                type="number"
                step="0.001"
                label=""
                onIonChange={(e) => {
                  setFormDetails({
                    ...formDetails,
                    front_camera_mp: parseFloat(e.target.value?.toString() || "0"),
                  });
                }}
              ></IonInput>
            </IonItem>
          </div>
        </>
      );
};

export default HardwareExtraInfoForm;
