// TODO: only used once put it in the file
// but also can it go into strapi and be adapted as that'd be more interesting than here
// its litterally adapting the query so doesnt seem too bad

import * as React from "react"

interface AdjTypes {
  adjService: string;
}
function Adj({ adjService }: AdjTypes) {

  // console.log(adjService);

  if (adjService === 'wedding') {
    return (
      <>special day</>
    );
  }

  if (adjService === 'residential') {
    return (
      <>home</>
    );
  }

  if (adjService === 'commercial' || adjService === 'commercial-events') {
    return (
      <>business</>
    );
  }

  if (adjService === 'social-events') {
    return (
      <>event</>
    );
  }

  if (adjService === 'patio') {
    return (
      <>patio</>
    );
  }
  return null;
}

interface AdjectiveTypes {
  service: string;
}
const Adjective = ({ service }: AdjectiveTypes) => {

  return (
    <p>
      Ready to bring your vision to life? Get started with a free estimate today and let us illuminate your&nbsp;<Adj adjService={service} />&nbsp;with an unforgettable lighting display!
    </p>
  )
}

export default Adjective
