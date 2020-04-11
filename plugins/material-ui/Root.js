import React from 'react';
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import theme from '../../src/utils/theme';

export default function wrapRoot(Root) {
  return function (props) {
    console.log('wrapping root');
    React.useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, []);
    const BaseEl = React.createElement(CssBaseline);
    const RootEl = React.createElement(Root, props);
    return React.createElement(ThemeProvider, {theme}, BaseEl, RootEl);
  }
};
