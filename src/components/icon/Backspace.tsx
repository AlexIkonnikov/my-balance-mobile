import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Backspace = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44.18 44.18"
    width={44.18}
    height={44.18}
    style={{
      enableBackground: 'new 0 0 44.18 44.18',
    }}
    fill={'black'}
    xmlSpace="preserve"
    {...props}>
    <Path d="M10.625 5.09 0 22.09l10.625 17H44.18v-34H10.625zm31.555 32H11.734l-9.375-15 9.375-15H42.18v30z" />
    <Path d="m18.887 30.797 7.293-7.293 7.293 7.293 1.414-1.414-7.293-7.293 7.293-7.293-1.414-1.414-7.293 7.293-7.293-7.293-1.414 1.414 7.293 7.293-7.293 7.293z" />
  </Svg>
);

export default Backspace;
