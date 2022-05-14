import * as React from "react"

function StrShort(props) {
  let str = props.str;
  let short;
  let secure = 'https://';
  let http = 'http://';

  if (str.includes(secure) || str.includes(http)) {
    if (str.includes(secure)) {
      short = str.replace(secure, '');
    } else if (str.includes(http)) {
      short = str.replace(http, '');
    }
  }

  return (
    <>
      {short}
    </>
  );
}

export default StrShort;
