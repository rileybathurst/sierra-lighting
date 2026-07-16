// TODO: deal with tall images
// TODO: images of different heights currently look like a mess

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import type { ImageType } from "../types/image-type"
import type { ImageWithAspectType } from "../types/image-with-aspect-type"
import { HeroSEOImageType } from "../types/hero-seo-image-type"
import { PinterestHref } from "./pinterest-href"

type GalleryType = {
  gallery: ImageWithAspectType[];
  caption?: string;
  badge?: boolean;
}
function Slider({ gallery, badge }: GalleryType) {

  const inputRef = React.useRef<HTMLDivElement>(null);
  // const [imagesHeight, setImagesHeight] = React.useState(0);
  const [imagesWidth, setImagesWidth] = React.useState(0);

  React.useEffect(() => {
    const element = inputRef.current;
    if (!element) {
      return;
    }

    const updateHeight = () => {
      // const nextHeight = element.clientHeight;
      const nextWidth = element.clientWidth;
      // setImagesHeight((prevHeight) => prevHeight === nextHeight ? prevHeight : nextHeight);
      setImagesWidth((prevWidth) => prevWidth === nextWidth ? prevWidth : nextWidth);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const getSlideMetrics = () => {
    const scroller = inputRef.current;
    const firstSlide = scroller?.querySelector<HTMLElement>(".poster");

    if (!scroller || !firstSlide) {
      return null;
    }

    const slideWidth = firstSlide.clientWidth;
    if (!slideWidth) {
      return null;
    }

    const maxIndex = Math.max(0, gallery.length - 1);
    const currentIndex = Math.round(scroller.scrollLeft / slideWidth);

    return { scroller, slideWidth, maxIndex, currentIndex };
  };

  const scrollPrev = () => {
    const metrics = getSlideMetrics();
    if (!metrics) {
      return;
    }

    const { scroller, slideWidth, maxIndex, currentIndex } = metrics;
    const targetIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;

    scroller.scrollTo({
      left: targetIndex * slideWidth,
      behavior: "smooth",
    });
  }

  const scrollNext = () => {
    const metrics = getSlideMetrics();
    if (!metrics) {
      return;
    }

    const { scroller, slideWidth, maxIndex, currentIndex } = metrics;
    const targetIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;

    scroller.scrollTo({
      left: targetIndex * slideWidth,
      behavior: "smooth",
    });
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
        ref={inputRef}
      >

        {gallery.map((image) => (
          <div
            key={image.localFile.childImageSharp.gatsbyImageData.images.fallback?.src}
            className={`poster ${image.localFile.childImageSharp.gatsbyImageData.width}`}
            style={{ height: imagesWidth / 9 * 6, width: (imagesWidth / 9 * 6) * image.localFile.childImageSharp.resize.aspectRatio }}
          >
            <GatsbyImage
              image={
                image?.localFile?.childImageSharp?.gatsbyImageData
              }
              alt={image.alternativeText || "Gallery Image"}
            />
            {badge && image.caption ? <p className="capitalize">{image.caption}</p> : null}
            <PinterestHref imageSources={image.localFile.childImageSharp.gatsbyImageData.images.sources} />
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
  image: HeroSEOImageType;
  gallery?: ImageWithAspectType[];
  badge?: boolean;
  name?: string;
  detail?: ImageType;
}
function Hero({ image, gallery, badge, name, detail }: HeroType) {

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

  // * adding video in here starts adding quite a few things do we do something else with the gallery if we have a video
  let combinedGallery: ImageWithAspectType[] = [];
  if (gallery && gallery.length > 0) {
    if (image) {
      const imageWithAlt: ImageWithAspectType = {
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
      <PinterestHref imageSources={image.localFile.childImageSharp.gatsbyImageData.images.sources} />
    </div>
  )
}

export default Hero;