import * as React from "react"

function StrShort(props) {
  let str = props.str;
  let secure = 'https://';
  let http = 'http://';
  let www = 'www.';

  if (str.includes(secure) || str.includes(http)) {
    if (str.includes(secure)) {
      str = str.replace(secure, '');
    } else if (str.includes(http)) {
      str = str.replace(http, '');
    }
  }

  if (str.includes(www) || str.includes(www)) {
    str = str.replace(www, '');
  }

  if (str.includes('instagram.com/')) {
    str = str.replace('instagram.com/', '');
  }

  if (str.includes('facebook.com/')) {
    str = str.replace('facebook.com/', '');
  }

  if (str.includes('pinterest.com/')) {
    str = str.replace('pinterest.com/', '');
  }

  // this is a pinterest thing
  if (str.includes('_created/')) {
    str = str.replace('_created/', '');
  }

  if (str.endsWith('/')) {
    // console.log('ends with slash');
    str = str.slice(0, -1);
    // console.log('🤡 ' + shorter);
  }

  return (
    <>
      {str}
    </>
  );
}

export default StrShort;
