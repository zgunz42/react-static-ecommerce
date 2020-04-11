import React from 'react'
import { Root, Routes} from 'react-static'
import { CircularProgress, Box } from '@material-ui/core';
import { Router} from "@reach/router";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  loading: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

function App() {
  const classes = useStyles();
    return (
      <Root>
        <div className="App">
	        <React.Suspense fallback={<Box className={classes.loading}><CircularProgress/></Box>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
    )
  }

export default App
