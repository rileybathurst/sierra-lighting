import React, { useRef, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

type GalleryType = {
  gallery: any[];
  badge: boolean;
}
function Slider({ gallery, badge }: GalleryType) {
  // console.log(gallery)

  const inputRef = useRef(null);
  // console.log(inputRef)
  // console.log(inputRef.current)

  useEffect(() => {
    inputRef.current.scrollBy(100, 0);
  })

  const scrollPrev = () => {
    inputRef.current.scrollBy(-100, 0);
    if (inputRef.current.scrollLeft === 0) {
      inputRef.current.scrollTo({
        left: inputRef.current.scrollWidth,
      });
    }
  }

  const scrollNext = () => {
    inputRef.current.scrollBy(100, 0);
    if (inputRef.current.scrollLeft + inputRef.current.clientWidth === inputRef.current.scrollWidth) {
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
            key={image.localFile.url}
            className={`poster ${image.localFile.childImageSharp.gatsbyImageData.width}`}
          >
            <GatsbyImage
              image={
                image?.localFile?.childImageSharp?.gatsbyImageData
              }
              alt={image.alternativeText || "Gallery Image"}
            />
            {badge ? <p>{image.alternativeText}</p> : null}
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

export default Slider;