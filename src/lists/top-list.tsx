
import React, { useState, useRef, useEffect } from 'react';
import { Link } from "gatsby"

function TopList() {
  return (
    <ul>
      <li><Link to="/residential">Residential</Link></li>
      <li><Link to="/commercial">Commercial</Link></li>
      <li><Link to="/wedding">Wedding</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );
}

export default TopList
