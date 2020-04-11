/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import { useLocation, Link as RLink } from '@reach/router';
import MuiLink from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
  active: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, ...other } = props;

  if (href.indexOf('/') !== 0) {
    return <a ref={ref} style={{textDecoration: 'none'}}  {...other} />
  }

  return (
    <RLink ref={ref} to={href} as={as} style={{textDecoration: 'none'}} {...other} />
  );
});

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useLocation();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const classes = useStyles();
  const className = clsx(classNameProps, {
    [classes.active]: router.pathname === pathname && activeClassName,
  });

  if (naked || pathname.indexOf('/') === 0) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink component={NextComposed} className={className} ref={innerRef} href={href} {...other} />
  );
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

export default React.forwardRef(({to: href, ...props}, ref) => <Link {...props} href={href} innerRef={ref} />);
