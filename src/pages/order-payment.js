import React from 'react';
import Container from 'modules/components/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppAppBar from 'modules/components/AppAppBar';
// import Iframe from 'modules/components/Iframe';
import AppFooter from 'modules/components/AppFooter';
import Stepper from 'modules/components/Stepper';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import Head from 'modules/components/Head';

const useStyles = makeStyles(theme => ({
  stepper: {
    marginLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    marginRight: 'auto',
    minWidth: 400,
  },
  container: {
    marginTop: theme.spacing(4),
  },
}));

function Redirect() {
  const { cart } = useSelector(state => ({ cart: state.data.cart }));

  React.useEffect(() => {
    if (cart.count != null && cart.count === 0) {
      navigate('/order-cart/');
    }
  }, [cart.count]);

  return null;
}

export default function Payment() {
  const classes = useStyles();

  const { cart } = useSelector(state => ({ cart: state.data.cart }));

  React.useEffect(() => {
    if (cart.entries == null) {
      return;
    }

    window.dataLayer.push({
      ecommerce: {
        checkout: {
          actionField: {
            step: 2,
          },
          products: cart.entries.map(entry => [
            {
              id: entry.slug,
              name: entry.name,
              price: entry.amount,
              quantity: 1,
            },
          ]),
        },
      },
    });
  }, [cart.entries]);

  return (
    <React.Fragment>
      <Head title="Payment">
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Redirect />
      <AppAppBar essential>
        <Stepper
          className={classes.stepper}
          steps={['View Cart', 'Checkout', 'Payment']}
          activeIndex={1}
        />
      </AppAppBar>
      <Container className={classes.container} maxWidth="md">
        {/*<Iframe src={`${process.env.GATSBY_WOO_COMMERCE_API}/order-payment/`} />*/}
        <p>content</p>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}
