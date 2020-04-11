import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../src/utils/theme';
const sheets = new ServerStyleSheets();
export default ({ providerProps = {} }) => ({
  beforeRenderToElement: (App) => props => {
    console.log('add provider');
    return sheets.collect(
      <ThemeProvider theme={theme}>
				<CssBaseline />
        <App {...props} />
      </ThemeProvider>
    )
  },
  headElements: async (elements) => [
    ...elements,
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />,
    <style
      id="jss-server-side"
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />,
  ],
})
