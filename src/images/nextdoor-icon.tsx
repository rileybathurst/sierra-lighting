import * as React from "react";

const NextdoorIcon = ({ businessName }: { businessName: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129.78 99.06"
    >
      <title>{businessName} nextdoor</title>
      <path
        d="M80.94,0c-17.82,0-33,8.18-41.52,20.7-.71,1-1.92,3.27-3.54,3.28-7.79.06-8.27-9.55-8.52-18.12A2.4,2.4,0,0,0,25,3.57L2.42,3.42A2.39,2.39,0,0,0,0,5.82v0C.52,26.79,4.37,41,29.74,46.67a3.05,3.05,0,0,1,2.36,3v47A2.37,2.37,0,0,0,34.47,99h22a2.39,2.39,0,0,0,2.39-2.39h0V48.12c0-10.79,7.65-23,22.16-23,13.81,0,22.15,12.24,22.15,23V96.67a2.39,2.39,0,0,0,2.39,2.39h21.91a2.39,2.39,0,0,0,2.38-2.39V44.52C129.79,19.58,108.51,0,80.94,0Z"
        transform="translate(-0.02)"
      />
    </svg>
  );
};

export default NextdoorIcon;