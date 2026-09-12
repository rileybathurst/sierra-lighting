import React from "react";

export const Phone = ({
  phone,
  leftAlign,
}: {
  phone: number;
  leftAlign?: boolean;
}) => {
  const string = phone.toString();
  const change = string.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <a
      href={`tel:${phone}`}
      className={`button ${leftAlign ? " button--left-align" : ""}`}
    >
      {change}
    </a>
  );
};
