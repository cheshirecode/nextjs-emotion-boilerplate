import React from 'react';
import App, { Container } from 'next/app';
import withEmotion from '@cnbu-hocs/withEmotion';
import { compose } from 'ramda';
import CustomHead from '@cnbu-components/CustomHead';
import { cache } from 'emotion';
import { CacheProvider } from '@emotion/react';
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
  render() {
    const {
      Component,
      pageProps: { title },
      pageProps,
    } = this.props;
    return (
      <CacheProvider value={cache}>
        <Container>
          <CustomHead title={title} />
          <Component {...pageProps} />
        </Container>
      </CacheProvider>
    );
  }
}

export default compose(
  withEmotion
)(CustomApp);
