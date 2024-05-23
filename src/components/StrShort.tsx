import * as React from "react"

interface StrShortTypes {
  website: string;
}
function StrShort({ website }: StrShortTypes) {
  let str = website;
  const secure = 'https://';
  const http = 'http://';
  const www = 'www.';

  if (str.includes(secure) || str.includes(http)) {
    if (str.includes(secure)) {
      str = str.replace(secure, '');
    } else if (str.includes(http)) {
      str = str.replace(http, '');
    }
  }

  if (str.includes('www') || str.includes(www)) {
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
  }

  return (
    <>
      {str}
    </>
  );
}

export default StrShort;
