import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'unstated';
import withStorePage from '@cnbu-hocs/withStorePage';
import withEmotion from '@cnbu-hocs/withEmotion';
import { compose } from 'ramda';
import CustomHead from '@cnbu-components/CustomHead';
import '@cnbu-static/styles/index.css';

class CustomApp extends App {
  static async getInitialProps({ Component /*,  router */, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
      }
    };
  }
  componentDidCatch(error, info) {
    super.componentDidCatch(error, info);
  }

  componentDidMount() {
    let UNSTATED = require('unstated-debug');
    UNSTATED.logStateChanges = true;
  }

  render() {
    const {
      Component,
      // pageProps: { title },
      pageProps,
      unstatedStore
    } = this.props;
    return (
      <Container>
        {/* <CustomHead title={title} /> */}
        <Provider inject={unstatedStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default compose(
  withStorePage,
  withEmotion
)(CustomApp);
