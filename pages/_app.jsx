import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../Provider/Theme';
import {Layout} from '../components/components';
import {StateProvider} from '../Provider/StateProvider';
import reducer, {initialState} from '../Provider/Reducer';
import {HeadTag} from "../components/components";
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

const MyApp = (props) => {
    const { Component, pageProps } = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

  return (
      <>
          <HeadTag />
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <StateProvider initialState={initialState} reducer={reducer}>
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
              </StateProvider>
          </ThemeProvider>
      </>
  );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;