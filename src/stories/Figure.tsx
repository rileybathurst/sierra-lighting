import React, { useState } from 'react';
// import '../../styles/global.css';
// import './figure.css';

/* type FigureImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}; */

/* interface FigureProps {
  // image?: FigureImage;
  caption?: string;
  focused?: boolean;
} */

export const Figure = ({
  image,
  caption = `Photo by <a href="https://unsplash.com/@sorasagano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sora Sagano</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  focused = false,
}) => {
  const [isfocused, toggleIsFocused] = useState<Boolean>(focused);

  return (
    <>
      test test 123
      <figure className={'figure'} data-focused={isfocused}>
        <div
          className={'figure__button'}
          role='button'
          data-focused={isfocused}
          onClick={() => toggleIsFocused(!isfocused)}
        >
          <img
            data-focused={isfocused}
            className={'figure__image'}
            src={image?.src}
            width={image?.width}
            height={image?.height}
            alt={`${image?.alt ? image.alt : '#'}`}
          />
        </div>
        <figcaption
          className={'figure__caption'}
          dangerouslySetInnerHTML={{ __html: caption }}
        ></figcaption>
      </figure>
    </>
  );
};