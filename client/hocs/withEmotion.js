import React, { Component } from 'react';
import { hydrate } from 'emotion';
import { injectGlobalStyles } from '@cnbu-static/styles';

export default ComposedComponent => {
  class HOC extends Component {
    componentWillMount() {
      if (typeof window !== 'undefined') {
        hydrate(window.__NEXT_DATA__.ids)
      }
      // injectGlobalStyles()
    }

    render() {
      return <ComposedComponent/>
    }
  }

  return HOC
};
