import * as React from "react";

type PinterestWindow = Window & {
  PinUtils?: {
    build?: () => void;
  };
};

export const usePinterestButton = () => {
  React.useEffect(() => {
    const pinterestWindow = window as PinterestWindow;
    const buildPinterestButton = () => {
      pinterestWindow.PinUtils?.build?.();
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-pinterest-script="true"]',
    );

    if (existingScript) {
      if (pinterestWindow.PinUtils?.build) {
        buildPinterestButton();
      } else {
        existingScript.addEventListener("load", buildPinterestButton, {
          once: true,
        });
        return () => {
          existingScript.removeEventListener("load", buildPinterestButton);
        };
      }

      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = "https://assets.pinterest.com/js/pinit.js";
    script.dataset.pinterestScript = "true";
    script.addEventListener("load", buildPinterestButton, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", buildPinterestButton);
    };
  }, []);
};