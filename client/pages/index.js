import React, { PureComponent } from 'react';
import SampleContent from '@cnbu-components/SampleContent';

class Index extends PureComponent {
  static async getInitialProps() {
    return {
      title: 'Index'
    };
  }
  render() {
    return <SampleContent />;
  }
}
export default Index;
