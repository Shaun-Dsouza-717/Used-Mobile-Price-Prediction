import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import './Card.css';
import { FormProps } from '../interface/FormProps';


const HardwareForm: React.FC<FormProps> = ({
    formDetails,
    setFormDetails,
}) => {
    return (
        <>
            <h1 className="text-header" style={{ width: 335 }}>
                Get instant results!
            </h1>
            <div className="select-container">
                <IonLabel className="text-label">Enter screen size</IonLabel>
                <IonItem className="select-option">
                    <IonInput
                        placeholder="Eg. 6.5 inches"
                        type="number"
                        step="0.001"
                        onIonChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                screen_size: parseFloat(e.target.value?.toString() || "0"),
                            });
                        }}
                    ></IonInput>
                </IonItem>
            </div>
            <div className="select-container">
                <IonLabel className="text-label">Enter device weight</IonLabel>
                <IonItem className="select-option">
                    <IonInput
                        placeholder="Eg. 125 gms"
                        type="number"
                        step="0.001"
                        onIonChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                weight: parseFloat(e.target.value?.toString() || "0"),
                            });
                        }}
                    ></IonInput>
                </IonItem>
            </div>
            <div
                className="network-container"
                style={formDetails["4g"] != "Yes" ? { width: 359 } : {}}
            >
                <div className="select-network">
                    <IonLabel className="text-label">4g Compatible ? </IonLabel>
                    <IonItem
                        className="select-option network"
                        style={formDetails["4g"] != "Yes" ? { width: 359 } : {}}
                    >
                        <IonSelect
                            placeholder="Select"
                            interface="popover"
                            onIonChange={(e) =>
                                setFormDetails({
                                    ...formDetails,
                                    "4g": e.target.value,
                                })
                            }
                            value={formDetails["4g"]}
                        >
                            <IonSelectOption value="Yes">Yes</IonSelectOption>
                            <IonSelectOption value="No">No</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </div>
                {formDetails["4g"] === "Yes" && (
                    <div className="select-network">
                        <IonLabel className="text-label">5g Compatible ? </IonLabel>
                        <IonItem className="select-option network">
                            <IonSelect
                                placeholder="Select"
                                interface="popover"
                                onIonChange={(e) =>
                                    setFormDetails({
                                        ...formDetails,
                                        "5g": e.target.value,
                                    })
                                }
                                value={formDetails["5g"]}
                            >
                                <IonSelectOption value="Yes">Yes</IonSelectOption>
                                <IonSelectOption value="No">No</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </div>
                )}
            </div>
        </>
    );
};

export default HardwareForm;