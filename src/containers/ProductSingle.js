import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import AppAppBar from 'modules/components/AppAppBar';
import AppFooter from 'modules/components/AppFooter';
import Container from 'modules/components/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from 'modules/components/Tab';
import MuiLink from '@material-ui/core/Link';
import Head from 'modules/components/Head';
import {useRouteData} from "react-static";
import {useLocation} from '@reach/router';
import {withRedux} from "modules/components/redux";
import {ShoppingCart} from '@material-ui/icons';
import createMdxElement from "modules/components/markdown";
import Button from "modules/components/Button";
import Link from "modules/components/Link";
import Rating from "@material-ui/lab/Rating";
import Alert from "@material-ui/lab/Alert";
import {getSize} from "utils/grid";
import InputCount from "modules/components/InputCount";
import {InputLabel, FormControl, Box} from "@material-ui/core";

function formatNumber(number) {
  return String(number).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
}


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  slider: {
    marginBottom: theme.spacing(3),
  },
  imageContainer: {
    position: 'relative',
    padding: '55% 0 0 0',
    '& $preview': {
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.short,
      }),
    },
    '&:hover $preview': {
      opacity: 1,
    },
  },
  preview: {
    position: 'absolute',
    backgroundColor: fade(theme.palette.primary.main, 0.6),
    display: 'flex',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    borderRadius: theme.spacing(1),
  },
  img: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    display: 'block',
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
    objectFit: 'cover',
    color: theme.palette.grey[100],
    backgroundColor: theme.palette.grey[100],
  },
  pricePaper: {
    marginBottom: theme.spacing(3),
  },
  priceHeader: {
    marginBottom: theme.spacing(1.5),
  },
  pricePreview: {
    margin: theme.spacing(1, 0),
  },
  label: {
    margin: theme.spacing(0, 0, 3),
    '& .MuiFormControlLabel-label': {
      marginLeft: theme.spacing(0.5),
      width: '100%',
    },
  },
  packageType: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(2),
  },
  variation: {
    '& ul': {
      padding: 0,
      margin: theme.spacing(0.5, 0, 0, 0.5),
      listStyleType: 'none',
    },
    '& .MuiTypography-body1': {
      lineHeight: 1,
    },
    '& li svg': {
      fontSize: 16,
      verticalAlign: '-0.125em',
      marginRight: 5,
    },
    '& li .emoji': {
      fontSize: 10,
      marginRight: 4,
    },
  },
  variantSelect: {
    marginTop: 2,
  },
  tabs: {
    margin: theme.spacing(3, 0, 4),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  store: {
    display: 'flex',
    marginTop: 4,
    alignItems: 'center',
  },
  storeAvatar: {
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    color: '#fff',
  },
  sales: {
    padding: theme.spacing(3, 1, 2, 1),
    display: 'flex',
    alignItems: 'center',
  },
  salesTotal: {
    margin: theme.spacing(0, 1, 0, 1.5),
    fontSize: 24,
  },
  salesLabel: {
    marginTop: 5,
  },
  ratings: {
    padding: theme.spacing(3, 1, 2, 1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& .MuiTypography-root': {
      marginRight: 2,
    },
  },
  valueProps: {
    margin: theme.spacing(2, 1, 3, 1),
    listStyle: 'none',
    padding: theme.spacing(0),
    '& li': {
      display: 'flex',
    },
    '& li > svg': {
      color: theme.palette.success.main,
      marginRight: theme.spacing(1),
    },
  },
  upsellDivider: {
    margin: theme.spacing(8, 0, 10),
  },
  upsell: {
    margin: theme.spacing(6, 0, 4),
  },
  upsellCta: {
    marginTop: theme.spacing(3),
  },
  upsellItem2: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
      paddingLeft: theme.spacing(6),
    },
  },
  upsellImage: {
    width: '100%',
    borderRadius: 8,
    boxShadow: theme.shadows[2],
  },
}));

function ProductSingle(props) {
  const classes = useStyles();
  const location = useLocation();
  const { cart } = props;
  const {product} = useRouteData();
  const [page, setPage] = React.useState('description');

  React.useEffect(() => {
    if (location.hash === '#reviews') {
      setPage('reviews');
    }
  }, [location]);

  const inCart = false;
  const handleAddToCartClick = () => {};
  const addToCart = () => {};

  return (
    <React.Fragment>
      <Head title={product.name} description={product.description} image={product.images[0].src}>
        <meta name="twitter:label1" content="Price" />
        <meta
          name="twitter:data1"
          content={`${product.priceStr}`}
        />
        <meta name="twitter:label2" content="Store" />
        <meta name="twitter:data2" content="Hidroni" />
      </Head>
      <AppAppBar />
      <Container className={classes.container} maxWidth="md">
        <Typography className={classes.title} variant="h2">
          {product.name}
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <div className={classes.imageContainer}>
              <img className={classes.img} alt={product.name} src={product.images[0].src} />
            </div>
            <Tabs
              onChange={(_, route) => {
                setPage(route);
              }}
              value={page}
              className={classes.tabs}
              indicatorColor="primary"
              scrollButtons="off"
            >
              <Tab value="description" label="Description" />
              <Tab value="reviews" label="Reviews" id="reviews" />
               <Tab value="comments" label="Comments" id="comments" />
            </Tabs>
            {page === 'description' ? (
              <Fade in>
                {
                  createMdxElement(product.body)
                }
              </Fade>
            ) : null}
            {page === 'reviews' ? (
              <Fade in>
                <h3>reviews</h3>
              </Fade>
            ) : null}
            {page === 'comments' ? (
              <Fade in>
                <h3>comments</h3>
              </Fade>
            ) : null}
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid className={classes.pricePaper}>
              <Box my={4} mt={0}>
                <Typography variant="body2" className={classes.packageType}>
                  {product.description}
                </Typography>
                {
                  product.notice && (<Alert severity="info">{product.notice}</Alert>)
                }
                <Box mt={4}>
                  <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                  >
                    <Grid item md={7}>
                      <FormControl variant="filled">
                        <InputLabel htmlFor="item-on-cart">Jumlah Produk</InputLabel>
                        <InputCount id="item-on-cart"/>
                      </FormControl>
                    </Grid>
                    <Grid md={5} item zeroMinWidth>
                      <Typography variant="h6">
                        Price
                      </Typography>
                      <Typography noWrap>
                        {product.priceStr}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              {inCart ? (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  naked
                  component={Link}
                  to="/order-cart/"
                >
                  See in cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleAddToCartClick}
                  disabled={addToCart}
                >
                  {product.price === '0' ? 'Download' : 'Buy now'}
                </Button>
              )}
              <Button
                className={classes.pricePreview}
                variant="outlined"
                fullWidth
                target="_blank"
                component={Link}
                to={`/previews/${product.slug}/`}
              >
                Live Preview
              </Button>
              <Grid container>
                <Grid item xs={6}>
                  <Typography className={classes.sales}>
                    <ShoppingCart fontSize="small" />
                    <span className={classes.salesTotal}>
                            {formatNumber(product.stats.total_sales)}
                          </span>
                    <span className={classes.salesLabel}>Sales</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.ratings}>
                  <Rating
                    value={parseFloat(product.stats.average_rating)}
                    readOnly
                    precision={0.5}
                    disabled={product.stats.rating_count === 0}
                  />
                  <Typography color="textSecondary" variant="caption">
                    {product.stats.rating_count > 0 ? `${product.stats.average_rating}/5 ` : null}
                    <MuiLink
                      href="#reviews"
                      onClick={() => {
                        setPage('reviews');
                      }}
                      color="inherit"
                    >
                      {`(${product.stats.rating_count} review${product.stats.rating_count === 1 ? '' : 's'})`}
                    </MuiLink>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <AppFooter />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Product',
            category: product.category[0].name,
            url: `https://hidroni.adibite.xyz/shop/${location.pathname}`,
            description: product.description,
            name: product.name,
            productID: product.slug,
            image: product.images[0].src,
            ...(product.stats.rating_count > 0
              ? {
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: product.stats.average_rating,
                  ratingCount: product.stats.rating_count,
                },
              }
              : {}),
            ...(product.price !== 0
              ? {
                offers: {
                  '@type': 'Offer',
                  price: product.price || 0,
                  priceCurrency: 'IDR',
                  availability: 'http://schema.org/InStock',
                },
              }
              : {}),
          }),
        }}
      />
    </React.Fragment>
  );
}


export default withRedux(ProductSingle);
