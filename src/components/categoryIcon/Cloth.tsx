import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Cloth = (props: SvgProps) => (
  <Svg viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m94.7 10.3-11.9-3c-1.6-.4-3.2-.6-4.9-.6H50.1c-1.6 0-3.3.2-4.9.6l-11.9 3c-4.8 1.2-9 4.2-11.8 8.3L6.8 40.8c-1.5 2.3-.9 5.4 1.4 6.9l8.4 5.6c2.1 1.4 5 1 6.7-1l5.6-6.9v65.9c0 2.8 2.2 5 5 5h60.4c2.8 0 5-2.2 5-5V45.4l5.6 6.9c1.6 2 4.5 2.5 6.7 1l8.4-5.6c2.3-1.5 2.9-4.6 1.4-6.9l-14.8-22.1c-2.9-4.2-7.1-7.2-11.9-8.4z"
      fill="#FFF"
    />
    <Path d="M80.3 8.4c-.8 8.3-7.8 14.7-16.3 14.7-8.6 0-15.7-6.6-16.3-15.1" fill="#E5E6E6" />
    <Path
      d="M107.7 17.8c-3-4.5-7.5-7.6-12.7-8.9l-11.9-3c-1.7-.4-3.5-.6-5.2-.6H50.1c-1.8 0-3.5.2-5.2.6L33 8.9c-5.2 1.3-9.7 4.5-12.7 8.9L5.5 39.9c-1 1.4-1.3 3.2-1 4.9.3 1.7 1.3 3.2 2.8 4.1l8.4 5.6c1.1.7 2.3 1.1 3.6 1.1 2 0 3.8-.9 5.1-2.4l2.9-3.6v61.7c0 3.6 2.9 6.5 6.5 6.5h60.4c3.6 0 6.5-2.9 6.5-6.5V49.6l2.9 3.6c1.2 1.5 3.1 2.4 5.1 2.4 1.3 0 2.5-.4 3.6-1.1l8.4-5.6c1.4-1 2.4-2.4 2.8-4.1.3-1.7 0-3.4-1-4.9l-14.8-22.1zM77.9 8.2h.9C78 15.9 71.7 21.6 64 21.6c-7.6 0-14-5.8-14.8-13.3h28.7zM119 46.4l-8.4 5.6c-1.5 1-3.6.7-4.7-.7l-5.6-6.9c-.4-.5-1.1-.7-1.7-.5-.6.2-1 .8-1 1.4v65.9c0 1.9-1.6 3.5-3.5 3.5H33.8c-1.9 0-3.5-1.6-3.5-3.5V45.4c0-.6-.4-1.2-1-1.4-.2-.1-.3-.1-.5-.1-.4 0-.9.2-1.2.6L22 51.4c-1 1.3-3.1 1.6-4.6.6L9 46.4c-1.6-1.1-2-3.2-1-4.9l14.8-22.1c2.6-3.8 6.4-6.6 10.9-7.7l11.9-3c.2-.1.4-.1.6-.1 1 9 8.6 16 17.7 16 9.2 0 16.8-6.8 17.8-15.9.2 0 .4.1.6.1l11.9 3c4.5 1.1 8.3 3.8 10.9 7.7L120 41.6c1 1.6.6 3.8-1 4.8z"
      fill="#4A374F"
    />
    <Path
      d="M89.1 40.4H74.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h14.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
      fill="#4A374F"
    />
  </Svg>
);

export default Cloth;
