import * as React from "react"

function Adj({ adjService }) {

  console.log(adjService);

  if (adjService === 'wedding') {
    return (
      <>special day</>
    );
  } else if (adjService === 'residential') {
    return (
      <>home</>
    );
  } else if (adjService === 'commercial' || adjService === 'commercial-events') {
    return (
      <>business</>
    );
  } else if (adjService === 'social-events') {
    return (
      <>event</>
    );
  } else if (adjService === 'patio') {
    return (
      <>patio</>
    );
  } else {
    return null;
  }
}

const Adjective = ({ service }: string) => {

  return (
    <p>
      Ready to bring your vision to life ? Get started with a free estimate today and let us illuminate your&nbsp;<Adj adjService={service} />&nbsp;with an unforgettable lighting display!
    </p>
  )
}

export default Adjective
