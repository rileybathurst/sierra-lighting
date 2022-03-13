import React, { useRef, useEffect } from "react";

// import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// local build
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// markup
const LeafletPage = () => {

  return (
    <>
      {/* <Seo title="Sierra Lighting" /> */}
      <Header />
      <main className="measure">

        <h1>Maps</h1>
        < MapContainer center={[51.505, -0.09]} zoom={13} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer >
      </main>

      <Footer />

    </>
  )
}

export default LeafletPage

// export async function getServerData() { }