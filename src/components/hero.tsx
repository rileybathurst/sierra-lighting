// TODO: deal with tall images
// TODO: images of different heights currently look like a mess

import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import type { ImageType } from "../types/image-type"
import type { IGatsbyImageData } from "gatsby-plugin-image"

type GalleryType = {
  gallery: ImageType[];
  badge?: boolean;
}
function Slider({ gallery, badge }: GalleryType) {

  const inputRef = useRef<HTMLDivElement>(null);
  // console.log(inputRef)
  // console.log(inputRef.current)

  /* useEffect(() => {
      inputRef.current?.scrollBy(100, 0);
    }) */

  const scrollPrev = () => {
    inputRef.current?.scrollBy(-100, 0);
    if (inputRef.current?.scrollLeft === 0) {
      inputRef.current.scrollTo({
        left: inputRef.current.scrollWidth,
      });
    }
  }

  const scrollNext = () => {
    inputRef.current?.scrollBy(100, 0);
    if (inputRef.current && inputRef.current.scrollLeft + inputRef.current.clientWidth === inputRef.current.scrollWidth) {
      inputRef.current.scrollTo({
        left: 0
      });
    }
  }

  return (
    <section className="gallery">
      <button
        type="button"
        className="prev"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <div
        className="images"
        // ref={ref}
        ref={inputRef}
      >

        {gallery.map((image) => (
          <div
            key={image.localFile.childImageSharp.gatsbyImageData.images.fallback?.src}
            className={`poster ${image.localFile.childImageSharp.gatsbyImageData.width}`}
          >
            <GatsbyImage
              image={
                image?.localFile?.childImageSharp?.gatsbyImageData
              }
              alt={image.alternativeText || "Gallery Image"}
            />
            {badge && image.caption ? <p className="capitalize">{image.caption}</p> : null}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="next"
        onClick={scrollNext}
      >
        Next
      </button>
    </section>
  )
}

type HeroType = {
  image: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    alternativeText?: string;
    caption?: string
  };
  gallery?: ImageType[];
  badge?: boolean;
  name?: string;
  detail?: ImageType;
}
function Hero({ image, gallery, badge, name, detail }: HeroType) {

  // console.log(image?.localFile.childImageSharp.gatsbyImageData.width)

  if (image) {
    process.env.NODE_ENV === "development" ?
      image.localFile.childImageSharp.gatsbyImageData?.width <= 959
        ? console.warn('Hero Image is too small')
        : null
      : null

    process.env.NODE_ENV === "development" ?
      image.alternativeText ? null : console.warn('hero has no alt text')
      : null
  }

  let combinedGallery: ImageType[] = [];
  if (gallery && gallery.length > 0) {
    if (image) {
      const imageWithAlt: ImageType = {
        localFile: {
          ...image.localFile,
          url: undefined,
        },
        alternativeText: image.alternativeText ?? "",
        caption: image.caption ?? "",
      };
      combinedGallery = [imageWithAlt, ...gallery];
    } else {
      combinedGallery = [...gallery];
    }
  }

  if (combinedGallery.length > 0) {
    return (
      <div className="hero-image">
        <Slider
          gallery={combinedGallery}
          badge={badge}
        />
        {detail ?
          <GatsbyImage
            image={detail?.localFile?.childImageSharp?.gatsbyImageData}
            alt={detail?.alternativeText ? detail?.alternativeText : name || "Hero Detail Image"}
            className="detail poster"
          />
          : null
        }
      </div>
    )
  }

  if (!image) {
    return null;
  }

  return (
    <div className={`hero-image  ${image.localFile.childImageSharp.gatsbyImageData.width <= 959 ? 'hero-stork' : null}`}>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.alternativeText || "Hero Image"}
        className="poster"
      />
      {detail ?
        <GatsbyImage
          image={detail?.localFile?.childImageSharp?.gatsbyImageData}
          alt={detail.alternativeText ? detail?.alternativeText : name || "Hero Detail Image"}
          className="detail poster"
        />
        : null
      }
    </div>
  )
}

export default Hero;