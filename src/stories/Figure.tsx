import React, { useState } from 'react';

type ImageProps = {
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
};

type FigureProps = {
  image?: ImageProps | null;
  caption?: React.ReactNode;
  focused?: boolean;
};

export const Figure: React.FC<FigureProps> = ({
  image,
  caption = (
    <>
      Photo by <a href="https://unsplash.com/@sorasagano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sora Sagano</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </>
  ),
  focused = false,
}) => {
  const [isfocused, toggleIsFocused] = useState<boolean>(focused);

  return (
    <>
      test test 123
      <figure className={'figure'} data-focused={isfocused}>
        <button
          type="button"
          className={'figure__button'}
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
        </button>
        <figcaption className={'figure__caption'}>
          {caption}
        </figcaption>
      </figure>
    </>
  );
};