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



const DeviceUsageDetailForm: React.FC<FormProps> = ({formDetails,setFormDetails}) => {
    return (
      <>
        <h1 className="text-header" style={{ width: 407, fontSize: 33 }}>
          Old device = Instant cash!
        </h1>
        <div className="select-container">
          <IonLabel className="text-label">Enter Internal Memory</IonLabel>
          <IonItem className="select-option">
            <IonInput
              placeholder="Eg. 128 GB"
              type="number"
              step="0.001"
              label=""
              onIonChange={(e) => {
                setFormDetails({
                  ...formDetails,
                  internal_memory: parseFloat(
                    e.target.value?.toString() || "0"
                  ),
                });
              }}
            ></IonInput>
          </IonItem>
        </div>
        <div className="select-container">
          <IonLabel className="text-label">Enter new device price</IonLabel>
          <IonItem className="select-option">
            <IonInput
              placeholder="Eg. 450 $"
              type="number"
              step="0.001"
              label=""
              onIonChange={(e) => {
                setFormDetails({
                  ...formDetails,
                  normalized_new_price: parseFloat(
                    e.target.value?.toString() || "0"
                  ),
                });
              }}
            ></IonInput>
          </IonItem>
        </div>
        <div className="network-container">
          <div className="select-network">
            <IonLabel className="text-label">Enter release year</IonLabel>
            <IonItem className="select-option network">
              <IonInput
                placeholder="Eg. 2017"
                type="number"
                step="0.001"
                label=""
                onIonChange={(e) => {
                  setFormDetails({
                    ...formDetails,
                    release_year: parseFloat(
                      e.target.value?.toString() || "0"
                    ),
                  });
                }}
              ></IonInput>
            </IonItem>
          </div>
          <div className="select-network">
            <IonLabel className="text-label">Enter days used</IonLabel>
            <IonItem className="select-option network">
              <IonInput
                placeholder="Eg. 400 days"
                type="number"
                step="0.001"
                label=""
                onIonChange={(e) => {
                  setFormDetails({
                    ...formDetails,
                    days_used: parseFloat(e.target.value?.toString() || "0"),
                  });
                }}
              ></IonInput>
            </IonItem>
          </div>
        </div>
      </>
    );
};

export default DeviceUsageDetailForm;
