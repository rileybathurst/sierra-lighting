// this is the Name.tsx file
import React from "react";
import { Menu } from "./Menu";
import { Topbar } from "./Topbar";

export const Header = () => {
  return (
    <>
      <Topbar />
      <header>
        <div className="stripe">{/* stay gold */}</div>
        <Menu />
      </header>
    </>
  );
};
