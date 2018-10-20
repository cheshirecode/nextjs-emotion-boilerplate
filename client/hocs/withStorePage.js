import React, { Component } from 'react';
import SampleContainer from '@cnbu-containers/SampleContainer';

let store = [new SampleContainer()];
const __NEXT_UNSTATED_STORE__ = '__NEXT_UNSTATED_STORE__';

const getOrCreateStore = s => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return s || store;
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_UNSTATED_STORE__]) {
    window[__NEXT_UNSTATED_STORE__] = s || store;
  }
  return window[__NEXT_UNSTATED_STORE__];
};

export default App => {
  return class AppWithUnstated extends Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const unstatedStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.unstatedStore = unstatedStore;

      let pageProps = {};
      if (typeof App.getInitialProps === 'function') {
        pageProps = await App.getInitialProps(appContext);
      }

      return {
        initialUnstatedState: undefined,
        ...pageProps
      };
    }

    constructor(props) {
      super(props);
      this.unstatedStore = getOrCreateStore();
    }

    render() {
      return <App {...this.props} unstatedStore={this.unstatedStore} />;
    }
  };
};
