import React, { Component } from 'react';
import withEmotion from '@cnbu-hocs/withEmotion';
import { compose } from 'ramda';
import CustomHead from '@cnbu-components/CustomHead';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import '@cnbu-styles/index.css';
const cache = createCache({
  key: 'cnbu'
});
class App extends Component {
  componentDidCatch(error, info) {
    super.componentDidCatch(error, info);
  }
  render() {
    const {
      Component,
      pageProps: { title = '' } = {},
      pageProps
    } = this.props;
    return (
      <CacheProvider value={cache}>
        <CustomHead title={title} />
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}

export default compose(withEmotion)(App);
