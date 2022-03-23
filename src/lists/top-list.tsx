
import React, { useState, useRef, useEffect } from 'react';
import { Link } from "gatsby"

function TopList() {
  return (
    <ul>
      <li key="residential"><Link to="/residential">Residential</Link></li>
      <li key="commercial"><Link to="/commercial">Commercial</Link></li>
      <li key="wedding"><Link to="/wedding">Wedding</Link></li>
      <li key="contact"><Link to="/contact">Contact</Link></li>
    </ul>
  );
}

export default TopList
