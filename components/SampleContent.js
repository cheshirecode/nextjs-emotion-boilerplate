import { Basic, Combined, Animated, bounce } from '@cnbu-styles';

const SampleContent = ({ className }) => (
  <div
    className={className}
    css={{
      width: '100%',
      '& > *': {
        padding: '1rem'
      }
    }}
  >
    <Basic>Basic Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>
      <span>Bounce</span>
    </Animated>
  </div>
);

export default SampleContent;
