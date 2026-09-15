// this is the Start.tsx file
import React from "react";
import { faker } from "@faker-js/faker"

type startTypes = {
  buttonLeftAlign?: boolean;
}
export const Start = (buttonLeftAlign: startTypes) => {

  return (
    <a href="contact" className={`button button-hero ${buttonLeftAlign && 'button--left-align'}`}>
      {faker.company.catchPhrase()}
    </a>
  );
};
