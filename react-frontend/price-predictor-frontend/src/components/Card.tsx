import {
  IonButton,
  IonCard, IonItem, IonLabel, IonSelect, IonSelectOption,
} from "@ionic/react";
import styled from "styled-components";

import "./Card.css";
import sliderImage1 from "../images/sliderimg1.png";
import sliderImage2 from "../images/sliderimg2.png";
import sliderImage3 from "../images/sliderimg3.png";
import { useEffect, useState } from "react";
import DeviceForm from "./DeviceForm";
import HardwareForm from "./HardwareForm";
import HardwareExtraInfoForm from "./HardwareExtraInfoForm";
import DeviceUsageDetailForm from "./DeviceUsageDetailForm";
import ResultsComponent from "./ResultsComponent";

interface Props {
  img: string;
}

const AutoSliderWrap = styled.div<Props>`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  whitespace: nowrap;
`;


/* Array of images used for slider */
const sliderImages = [
  {
    img: sliderImage1,
  },
  {
    img: sliderImage2,
  },
  {
    img: sliderImage3,
  },
];


const Card: React.FC = () => {
  /* sets the index of the current image on the screen */
  const [currentImage, setCurrentImage] = useState(0);
  // Current Form Page
  const [currentForm, setCurrentForm] = useState(0);
  // Form Details
  const [formDetails, setFormDetails] = useState({
      "device_brand": "",
      "device_type": "",
      "os": "",
      "ram": 0,
      "internal_memory": 0,
      "screen_size": 0,
      "weight": 0,
      "4g": "",
      "5g": "No",
      "battery": 0,
      "front_camera_mp": 0,
      "rear_camera_mp": 0,
      "normalized_new_price": 0,
      "release_year": 0,
      "days_used": 0,
  });
  const [price, setPrice] = useState(0);

const formComponents = [
  <DeviceForm formDetails={formDetails} setFormDetails={setFormDetails} />,
  <HardwareForm formDetails={formDetails} setFormDetails={setFormDetails} />,
  <HardwareExtraInfoForm
  formDetails={formDetails}
  setFormDetails={setFormDetails}
  />,
  <DeviceUsageDetailForm
  formDetails={formDetails}
  setFormDetails={setFormDetails}
  />,
  <ResultsComponent price={price}/>,
];



  const handleNext = () => {
    if (currentForm < formComponents.length - 1) {
      setCurrentForm(currentForm + 1);
    }
    console.log(formDetails);
  };

  const handleBack = () => {
    if (currentForm > 0) {
      setCurrentForm(currentForm - 1);
    }
  };

  const onFormSubmit = async () => {
    console.log(formDetails);
    let device = formDetails;
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/mobile/predictprice/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({device}),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      // console.log("API response:", responseData);
      responseData.price = Math.round(responseData.price * 100) / 100 - 100;
      setPrice(Math.round(responseData.price * 100) / 100);
      setCurrentForm(currentForm + 1);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onClear = () => {
    setFormDetails({
      device_brand: "",
      device_type: "",
      os: "",
      ram: 0,
      internal_memory: 0,
      screen_size: 0,
      weight: 0,
      "4g": "",
      "5g": "No",
      battery: 0,
      front_camera_mp: 0,
      rear_camera_mp: 0,
      normalized_new_price: 0,
      release_year: 0,
      days_used: 0,
    });
    setCurrentForm(0);
    setPrice(0);
  }


  useEffect(() => {
    /* sets the interval for the slideshow */
    const interval = setInterval(() => {
      /* When index reaches the end of array it restarts the process */
      if (currentImage === sliderImages.length - 1) {
        setCurrentImage(0);
      } else {
        /* else it increments the index */
        setCurrentImage(currentImage + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <IonCard className="main-container">
      <div
        className="img-container"
        style={{ transform: `translate(-${currentImage * 100}%,0)` }}
      >
        {sliderImages.map((image, index) => {
          return <AutoSliderWrap key={index} img={image.img} />;
        })}
      </div>
      <div className="text-container">
        {formComponents[currentForm]}
        <div className="button-container">
          {currentForm !== 0 && currentForm !== formComponents.length - 1 && (
            <IonButton className="next-btn" onClick={handleBack}>
              Back
            </IonButton>
          )}
          {currentForm !== formComponents.length - 2 &&
            currentForm !== formComponents.length - 1 && (
              <IonButton className="next-btn" onClick={handleNext}>
                Next
              </IonButton>
            )}
          {currentForm === formComponents.length - 2 && (
            <IonButton className="next-btn" onClick={onFormSubmit}>
              Predict
            </IonButton>
          )}
          {currentForm === formComponents.length - 1 && (
            <IonButton
              className="next-btn"
              onClick={onClear}
              style={{ width: 282, height: 50 }}
            >
              Predict another device
            </IonButton>
          )}
        </div>
      </div>
    </IonCard>
  );
};

export default Card;
