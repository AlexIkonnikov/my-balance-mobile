import * as React from 'react';
import Svg, {SvgProps, Defs, Rect, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const Travel = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill={'black'} {...props}>
    <Defs />
    <Rect height={16} rx={3} ry={3} width={23} x={0.5} y={6} />
    <Path d="M8.5 6V4a2.006 2.006 0 0 1 2-2h3a2.006 2.006 0 0 1 2 2v2M19.5 6v16M16.5 6v16M7.5 6v16M4.5 6v16" />
  </Svg>
);

export default Travel;
