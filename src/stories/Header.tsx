// this is the Name.tsx file
import React from "react";
import { Menu } from "./Menu";
import { Topbar } from "./Topbar";
import { Logo } from "./Logo";
import { faker } from "@faker-js/faker";
import { Start } from "./start";

export const Header = () => {
  return (
    <>
      <Topbar />
      <header>
        {/* // * now were removing too much may as well keep it in the header */}
        {/* <Menu /> */}

        {/* // TODO: I think this should have more contrast */}
        <div className="stripe">{/* stay gold */}</div>

        <div className="small-visibility header__logo">
          <Logo />
        </div>
        <button className="button-spinner" aria-label="Open Menu" type="button">
          <span className="sr-only">open menu</span>
          <div className="hamburger">
            <div>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </button>
        <nav className="menu__small">
          <menu>
            <ul className="">
              {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => (
                <li key={faker.vehicle.manufacturer()} className="xmas_r">
                  <a href={faker.vehicle.manufacturer()}>{faker.vehicle.manufacturer()} Lights</a>
                </li>
              ))}
              <Start buttonLeftAlign />
            </ul>
          </menu>
        </nav>

        <div className="bigboy">
          <ul className="wedding">
            {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => (
              <li key={faker.vehicle.manufacturer()} className="xmas_r">
                <a href={faker.vehicle.manufacturer()}>{faker.vehicle.manufacturer()} Lights</a>
              </li>
            ))}
            <Start />
          </ul>
        </div>
      </header>
    </>
  );
};
