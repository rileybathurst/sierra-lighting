import React from "react";
import StrShort from "./StrShort";

function WebsiteLink({ website }: { website: string }) {

  const tidy = website.includes("https://") ? (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={website}
    >
      <StrShort website={website} />
    </a>
  ) : (
    <a
      href={`https://${website}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={website}
    >
      <StrShort website={website} />
    </a>
  );

  return <React.Fragment>{tidy}</React.Fragment>;
}

export default WebsiteLink;
