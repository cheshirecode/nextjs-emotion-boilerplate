import React, { Component } from 'react';
import { hydrate } from 'react-emotion';
import { injectGlobalStyles } from '@cnbu-static/styles';

export default App => {
  class ComponentWithEmotion extends Component {
    static async getInitialProps(appContext) {
      const initialProps = App.getInitialProps ? await App.getInitialProps(appContext) : {};
      return {
        ...initialProps
      };
    }

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      if (typeof window !== 'undefined') {
        hydrate(window.__NEXT_DATA__.ids);
      }
      injectGlobalStyles();
    }

    render() {
      return <App {...this.props} />;
    }
  }

  return ComponentWithEmotion;
};
