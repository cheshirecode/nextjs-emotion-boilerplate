import React from 'react';
import { Basic, Combined, Animated, bounce } from '@cnbu-static/styles';
import withEmotion from '@cnbu-hocs/withEmotion';

const SampleContent = ({ className }) => (
  <div className={className}>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>
      <span>Bounce</span>
    </Animated>
  </div>
);

export default withEmotion(SampleContent);
