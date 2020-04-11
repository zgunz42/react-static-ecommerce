import React from 'react';
import {Box, Typography, Container, Grid} from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import ProTip from 'modules/components/ProTip';
import Link from 'modules/components/Link';
import {withRedux} from "modules/components/redux";
import AppAppBar from "modules/components/AppAppBar";
import HomeHero from "modules/components/HomeHero";
import AppFooter from "modules/components/AppFooter";
import Subscribe from "modules/components/Subscribe";
import ThemeGrid from "modules/components/ThemeGrid";
import Divider from "modules/components/Divider";
import { withStyles } from '@material-ui/styles';
import { useRouteData, Head } from 'react-static'

const styles = theme => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Index({classes, props}) {
  const { products } = useRouteData();
  console.log(products);
  return (
      <>
          <Head>
            <title>Beranda | Hidroni</title>
          </Head>
          <AppAppBar/>
          <HomeHero/>
          <Container maxWidth="md" id="populars">
            <Box mt={2} mb={8}>
              <Typography variant="h5" gutterBottom>
                Popular
              </Typography>
              <Divider className={classes.divider} />
              <Grid container spacing={4}>
                {products.map((product, index) => (
                  <Grid key={product.slug} item xs={12} sm={6}>
                    <ThemeGrid product={product} listPosition={index + 1} listName="home" />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
          <Container maxWidth="sm">
              <Box my={4}>
                  <Typography variant="h4" component="h1" gutterBottom>
                      Next.js example
                  </Typography>
                  <Link to="/about" color="secondary">
                      Go to the about page
                  </Link>
                  <ProTip/>
                  <Copyright/>
              </Box>
          </Container>
          <Container maxWidth="md">
              <Box mt={10} mb={4} id="subscribe">
                  <Box fontWeight="fontWeightMedium" clone>
                      <Typography variant="body1">Get new items in your inbox!</Typography>
                  </Box>
                  <Box mb={2}>
                      <Typography variant="body2">
                          Be notified when we launch new themes or big discounts. Never spam.
                      </Typography>
                  </Box>
                  <Subscribe />
              </Box>
          </Container>
          <AppFooter/>
      </>
  );
}

export default withRedux(withStyles(styles)(Index))
