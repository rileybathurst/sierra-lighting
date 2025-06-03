import * as React from "react";


const YelpIcon = ({ businessName }: { businessName: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 53.69"
    >
      <title>{businessName} yelp</title>
      <path
        className="cls-1"
        d="M29.4,43.35l10.45,5.1a2.4,2.4,0,0,1-.47,4.48L28.1,55.74a2.39,2.39,0,0,1-3-2.06,20.48,20.48,0,0,1,.94-8.94A2.4,2.4,0,0,1,29.4,43.35Z"
        transform="translate(-25 -18.15)"
      />
      <path
        className="cls-1"
        d="M33.58,64.86l7.78-8.63a2.39,2.39,0,0,1,4.17,1.68l-.4,11.62a2.4,2.4,0,0,1-2.8,2.28A20.75,20.75,0,0,1,34,68.44,2.4,2.4,0,0,1,33.58,64.86Z"
        transform="translate(-25 -18.15)"
      />
      <path
        className="cls-1"
        d="M52,53.37,63.08,57a2.4,2.4,0,0,1,1.42,3.31A20.72,20.72,0,0,1,59,67.35a2.39,2.39,0,0,1-3.56-.57l-6.16-9.86A2.4,2.4,0,0,1,52,53.37Z"
        transform="translate(-25 -18.15)"
      />
      <path
        className="cls-1"
        d="M63.26,46.32l-11.17,3.2a2.4,2.4,0,0,1-2.65-3.64L56,36.24a2.38,2.38,0,0,1,3.56-.46,20.47,20.47,0,0,1,5.29,7.27A2.4,2.4,0,0,1,63.26,46.32Z"
        transform="translate(-25 -18.15)"
      />
      <path
        className="cls-1"
        d="M37.15,19.2a33,33,0,0,0-5.74,2.12,2.39,2.39,0,0,0-1,3.35L41.29,43.59a2.39,2.39,0,0,0,4.47-1.2V20.55a2.39,2.39,0,0,0-2.57-2.39A33.5,33.5,0,0,0,37.15,19.2Z"
        transform="translate(-25 -18.15)"
      />
    </svg>
  );
};

export default YelpIcon;