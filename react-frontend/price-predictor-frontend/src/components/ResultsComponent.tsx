import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";

interface Props {
  price: number;
}

const ResultsComponent: React.FC<Props> = ({price}) => {
  return (
    <>
      <h1 className="text-header">Results</h1>
      <p className="results-text">
        Using our algorithm that analyze various factors influencing the
        value of used phones, our prediction model estimates a current market
        value of  <span className="results-value">${price}</span> for your device.
      </p>
    </>
  );
};

export default ResultsComponent;
