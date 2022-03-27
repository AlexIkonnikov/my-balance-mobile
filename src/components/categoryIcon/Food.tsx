import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Food = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-1-2h24v24H-1z" />
      <Path
        d="M6 16c-1.1 0-1.99.9-1.99 2S4.9 20 6 20s2-.9 2-2-.9-2-2-2ZM1 2h1l3.6 7.59-1.35 2.44C3.52 13.37 4.48 15 6 15h11c.55 0 1-.45 1-1s-.45-1-1-1H6l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 19.01 2H4.21L3.54.57a.993.993 0 0 0-.9-.57H1C.45 0 0 .45 0 1s.45 1 1 1Zm15 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z"
        fill="#1D1D1D"
      />
    </G>
  </Svg>
);

export default Food;
