// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Attribute } from './Attribute';
import { Footer } from './Footer';
// import { Hero } from './Hero';
// import { Start } from './Start';
import { faker } from "@faker-js/faker";

interface ProjectProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Project = ({
  primary = false,
  ...props
}: ProjectProps) => {

  return (
    <>
      <Header />
      <main
        {...props}
      >
        {primary ? 'primary' : 'secondary'}
        {/* <Hero /> */}
        <h1>Project</h1>
        <p>{faker.lorem.lines()}</p>
        <hr />
        <h3>Interested in a project like this</h3>
        {/* <Start /> */}
        <hr />
        <Attribute />
      </main>
      <Footer />
    </>
  );
};