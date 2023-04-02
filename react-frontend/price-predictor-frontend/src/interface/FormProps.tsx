interface FormDetails {
  device_brand: string;
  device_type: string;
  os: string;
  ram: number;
  internal_memory: number;
  screen_size: number;
  weight: number;
  "4g": string;
  "5g": string;
  battery: number;
  front_camera_mp: number;
  rear_camera_mp: number;
  normalized_new_price: number;
  release_year: number;
  days_used: number;
}

export interface FormProps {
  formDetails: FormDetails;
  setFormDetails: React.Dispatch<React.SetStateAction<FormDetails>>;
}
