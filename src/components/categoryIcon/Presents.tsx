import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Presents = (props: SvgProps) => (
  <Svg
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    fill={'black'}
    {...props}>
    <Path d="M31 16h-4.1c-1.1 0-1.9.9-1.9 1.9V29h5c.6 0 1-.4 1-1v-6c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM1 28c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V18H1v10zM23 9h-2.2c.3-1 .3-2.1-.2-3-.6-1.2-1.7-1.9-3-2-1.5-.1-2.9.7-3.8 2.1L12 9l-1.8-2.9C9.4 4.7 7.9 3.9 6.4 4c-1.3.1-2.4.8-3 2-.5.9-.5 2-.2 3H1c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zM5.5 9l-.1-.1c-.4-.7-.5-1.4-.2-2 .3-.7 1-.9 1.3-.9h.1c.6 0 1.4.3 1.9 1.1L9.6 9H5.5zm8.9 0 1.1-1.9C16 6.3 16.8 6 17.4 6h.1c.3 0 1 .2 1.3.9.3.6.2 1.3-.2 2 0 .1-.1.1-.1.1h-4.1z" />
  </Svg>
);

export default Presents;
