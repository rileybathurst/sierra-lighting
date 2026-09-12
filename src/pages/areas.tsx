import * as React from "react";
import Areas from "../components/areas";
import Footer from "../components/footer";
import Header from "../components/header";
import { SEO } from "../components/seo";

const AreasPage = () => {
  return (
    <>
      <Header />
      <Areas />
      <Footer />
    </>
  );
};

export default AreasPage;

export const Head = () => {
  return (
    <SEO
      title="Areas"
      description="Sierra Lighting hangs lights in Reno, Sparks, Truckee, Lake Tahoe, Carson City, Gardnerville, Minden, and the surrounding areas."
      // TODO:
      // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/areas-og-sierra_lighting.jpg"
      url="areas"
    />
  );
};
