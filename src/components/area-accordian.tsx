
import React, { useState, useRef, useEffect } from 'react';
import Hamburger from "../images/hamburger";
import AreaList from './area-list';

function AreaAccordian() {
  return (
    <details open>
      <summary>California Nevada</summary>
      <div className="tab-content">
        <AreaList />
      </div>
    </details>
  );
}

export default AreaAccordian
