import React from 'react';
import { Head } from 'react-static';
import * as PropTypes from 'prop-types';
import * as recompose from 'recompose';
import { Location } from '@reach/router';

function MyHead(props) {
  const {
    canonical: canonicalProp,
    children,
    description = [
      `This is a collection of the best React templates, React dashboard, and React themes.`,
      `Our collection was curated by Material-UI's creators.`,
      `It includes templates and themes for dashboard, admin, landing page, e-commerce site, application, and more.`,
    ].join(' '),
    image,
    location,
    imageSize,
    title: titleProps = 'React themes & templates',
  } = props;

  const title = `${titleProps} | Material-UI Store`;

  let imageWidth = null;
  let imageHeight = null;

  if (imageSize) {
    const sizes = imageSize.split('x').map(Number);
    imageWidth = <meta property="og:image:width" content={sizes[0]} />;
    imageHeight = <meta property="og:image:height" content={sizes[1]} />;
  }

  let canonical = canonicalProp;

  if (!canonical) {
    canonical = `https://material-ui.com${location.pathname}`;
  }

  let dev;

  if (process.env.GATSBY_ENV !== 'production') {
    dev = <meta name="robots" content="noindex,nofollow" />;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MaterialUI" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {imageWidth}
      {imageHeight}
      <meta property="og:ttl" content="604800" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Material-UI Store" />
      {/* SEO */}
      <link rel="canonical" href={canonical} />
      {dev}
      {children}
    </Head>
  );
}

MyHead.displayName = 'Head';

MyHead.propTypes = {
  canonical: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.string,
  imageSize: PropTypes.string,
  title: PropTypes.string,
};

MyHead.defaultProps = {
  image: '/icon/512x512.png',
};

export default recompose.fromRenderProps(Location, ({ location }) => ({ location }))(MyHead);
