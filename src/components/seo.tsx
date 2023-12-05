// https://www.gatsbyjs.com/docs/add-seo-component/

import React, { useState } from 'react';
import { IGatsbyImageData } from "gatsby-plugin-image"
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// TODO something about titles

// https://blog.spotibo.com/meta-description-length/
// less than 120 characters is good
// more than 160 characters is bad

// TODO this could be behind a state flag
function DescLength(props: { desc: any; }) {
  const desc = props.desc;
  const length = desc.length;

  if (length >= 160) {
    return <span className="bad key">{length} = Too long</span>;
  } else if (length >= 120) {
    return <span className="good key">{length} = Great</span>;
  } else {
    return <span className="bad key">{length} = Too Short</span>;
  }
}

function IfSeoImage(props: { image: string | undefined; }) {
  // TODO: this could be a ternary
  if (props.image) {

    let imagealt = props.image ? props.image : 'seo checking';

    return (
      <>
        {/* // TODO: I should do more with the alt */}
        <img src={props.image} alt={imagealt} />
      </>
    )
  } else {
    return null;
  }
}

// TODO: I think theres a way to query this but then I always have to query it
// function GetMeta(image (image: IGatsbyImageData)) {
function GetMeta(image: IGatsbyImageData) {
  if (image.image) {
    // console.log('image');
    // console.log(image);
    const [size, setSize] = useState(0);
    const [reply, setReply] = useState('ok');

    const link = image;
    // console.log(link);

    const img = new Image();
    img.src = image.image;

    // console.log(img.naturalWidth);

    /*   useEffect(() => {
        img.naturalWidth ? setSize(img.naturalWidth) : setSize(0);
    
        console.log(size);
    
      }, [img.naturalWidth]); */

    // this isnt right there should be a way of using effect for the timing but hack to get around it for now
    setTimeout(() => {
      setSize(img.naturalWidth)
      if (size == 1200) {
        setReply('good')
      } else {
        setReply('bad')
      }
    }, 100);

    return (
      <>
        <span className={`${reply} key`}>width: {size} = {reply}</span>
      </>
    )
  } else {
    // console.log('no image');
    return null;
  }
}

// area served is coming from the home page list of areas.

// Im not sure what the rules on what goes here vs in the array?
const SEO = ({
  title,
  description,
  image,
  itemScope,
  itemType,

}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    siteUrl,
    defaultDescription,
    defaultImage,
    ogImage,
    twitterImage,
    telephone,
    openingHours,
    areaServed,
    paymentAccepted,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    ogImage: image,
    twitterImage: twitterImage,
    url: `${siteUrl}${pathname}`,
    openingHours: `${openingHours}`,
    telephone: telephone,
    areaServed: areaServed,
    paymentAccepted: paymentAccepted,
    itemScope: itemScope,
    itemType: itemType
  };

  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={titleTemplate}
        htmlAttributes={{
          lang: 'en-US',
          // itemScope: undefined, // as was before boolean
          itemScope: `${seo.itemScope}`, // this seems to be working
          itemType: `${seo.itemType}`,
        }}
      >

        {/* // TODO do this with a query */}
        <meta itemProp="name" content="Sierra Lighting" />

        <meta name="description" content={seo.description} />
        <meta name="image" itemProp="image" content={seo.ogImage} />
        <meta property="og:type" content="website" />
        {seo.url && <meta property="og:url" itemProp="URL" content={seo.url} />} {/* // ! this isnt there yet */}
        {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}

        {/* // testing off incase this is the alt issue */}
        {seo.image && <meta property="og:image" itemProp="image" content={seo.ogImage} />}

        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        {seo.image && <meta name="twitter:image" content={seo.twitterImage} />}

        {seo.openingHours && (
          <meta name="openingHours" itemProp="openingHours" content={seo.openingHours} />
        )}
        {seo.telephone && <meta name="telephone" itemProp="telephone" content={seo.telephone} />}

        {seo.paymentAccepted && (
          <meta name="paymentAccepted" itemProp="paymentAccepted" content={seo.paymentAccepted} />
        )}

      </Helmet>
      {/* // ! this needs to be moved to an external project and with more work but thats later */}
      {/* {process.env.NODE_ENV === "production" ? ( */}
      {
        process.env.NODE_ENV === "development" ? (
          <div className="seo-showcase">
            <h1>SEO Showcase</h1>
            <p key="title"><span className="key">Title</span> = {seo.title}</p>
            <p key="description"><span className="key">Description</span> = {seo.description}</p>
            <p>Description charachter length = <DescLength desc={seo.description} /></p>
            {/* // ? why does this need to be ogImage? */}
            {/* // regular image doubles the url */}
            <p key="image"><span className="key">Image</span> = <GetMeta image={seo.ogImage} /></p>
            <IfSeoImage image={seo.ogImage} />
          </div>
        ) : null
      }

    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
  article: PropTypes.bool,
  openingHours: PropTypes.string,
  telephone: PropTypes.string,
  faxNumber: PropTypes.string,
  areaServed: PropTypes.string,
  paymentAccepted: PropTypes.string,
  location: PropTypes.string,
  slogan: PropTypes.string,
  gsv: PropTypes.string,
  itemScope: PropTypes.bool,
  itemType: PropTypes.string
};

SEO.defaultProps = {
  lang: `en`,
  itemType: `https://schema.org/LocalBusiness`,
  title: null,
  description: null,
  image: null,
  ogImage: null,
  twitterImage: null,
  article: false,
  openingHours: null,
  telephone: null,
  areaServed: null,
  paymentAccepted: null,
  itemScope: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        ogImage: image
        twitterImage: image
        openingHours
        telephone
        areaServed
        paymentAccepted
        itemType
      }
    }
  }
`;
