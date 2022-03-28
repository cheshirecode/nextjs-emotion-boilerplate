import { Component } from 'react';
import CustomHead from '@cnbu-components/CustomHead';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import '@cnbu-styles/index.css';
import { hydrate } from '@emotion/css';
import { injectGlobalStyles } from '@cnbu-styles';
const cache = createCache({
  key: 'cnbu'
});
class App extends Component {
  componentDidCatch(error, info) {
    super.componentDidCatch(error, info);
  }

  UNSAFE_componentWillMount() {
    if (typeof window !== 'undefined') {
      hydrate(window.__NEXT_DATA__.ids);
    }
    injectGlobalStyles();
  }

  render() {
    const { Component, pageProps: { title = '' } = {}, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <CustomHead title={title} />
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}

export default App;
