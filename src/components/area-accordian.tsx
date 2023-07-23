// TODO: this doesn't neet to be an accordian, it can just be a list of areas

import React, { useState } from 'react';
import AreaList from '../lists/area-list';

function AreaAccordian() {

  const [Accordian, setAccordian] = useState('open');

  if (Accordian === 'closed') {
    return (
      <div className="details large">
        <div className="summary" onClick={() => setAccordian('open')}>
          <h3 className='range'>
            <span className="cal">California</span>
            <span className="nev">Nevada</span>
            +
          </h3>
        </div>
        <div className={`tab-content ${Accordian}`}>
          {/* {Accordian} */}
          <AreaList />
        </div>
      </div>
    );
  } else {
    return (
      <div className="details large" >
        <div className="summary" onClick={() => setAccordian('closed')}>
          <h3 className='range'>
            <span className="cal">California</span>
            <span className="nev">Nevada</span>
            -
          </h3>
        </div>
        <div className={`tab-content ${Accordian}`}>
          {/* {Accordian} */}
          <AreaList />
        </div>
      </div>
    );
  }
}

export default AreaAccordian
