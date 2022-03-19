import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const FastFood = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 30 30"
    {...props}>
    <Path
      style={{
        color: '#000',
        fill: '#1a1a1a',
        stroke: '#d4d4d4',
        strokeWidth: 1.02777779,
        strokeOpacity: 1,
        marker: 'none',
        visibility: 'visible',
        display: 'inline',
        overflow: 'visible',
        enableBackground: 'accumulate',
      }}
      d="M29.17 16.569a14.008 14.008 0 1 1-28.016 0 14.008 14.008 0 1 1 28.017 0z"
      transform="matrix(.97297 0 0 .97297 330.508 -68.73)"
    />
    <Path
      style={{
        fill: '#1a1a1a',
        stroke: '#d4d4d4',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M345.296 957.89v11.863M357.16 969.753h-1.71"
      transform="translate(0 -1022.362)"
    />
    <Path
      style={{
        fill: '#1a1a1a',
        stroke: '#d4d4d4',
        strokeWidth: '.99999994px',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M345.296 981.616v-2.018"
      transform="translate(0 -1022.362)"
    />
    <Path
      style={{
        fill: '#1a1a1a',
        stroke: '#d4d4d4',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M333.433 969.753h11.863"
      transform="translate(0 -1022.362)"
    />
    <Path
      d="m15 1025.992-11.242 9.923h2.248v12.818h6.746v-7.565h4.65v7.565h6.592v-12.818h2.248L15 1025.992z"
      style={{
        fontSize: 12,
        fill: 'none',
        stroke: 'none',
      }}
      transform="translate(0 -1022.362)"
    />
    <Path
      style={{
        fontSize: 40,
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 400,
        fontStretch: 'normal',
        textAlign: 'start',
        lineHeight: '125%',
        writingMode: 'lr-tb',
        textAnchor: 'start',
        fill: '#1a1a1a',
        fillOpacity: 1,
        stroke: 'none',
        fontFamily: 'NPSPICT3',
        InkscapeFontSpecification: 'NPSPICT3',
      }}
      d="m26.597 1026.315-1.666 5.878h-8.485l2.043 16.216h6.945l2.074-16.216h-1.57l1.633-5.595-.974-.283zm-11.157 15.337c.167-1.467-.943-2.263-3.331-2.388H6.357c-2.388.125-3.509.922-3.363 2.388H15.44zm-12.446 4.4c-.146 1.467.975 2.252 3.363 2.357h5.752c2.388-.104 3.498-.89 3.33-2.356H2.995zm11.912-3.268H3.497c-.293 0-.544.104-.754.314a.993.993 0 0 0-.314.723c0 .314.104.571.314.77.21.199.461.298.754.298h11.409c.293 0 .544-.099.754-.298.21-.199.314-.456.314-.77a.994.994 0 0 0-.314-.723c-.21-.21-.461-.314-.754-.314z"
      transform="translate(0 -1022.362)"
    />
  </Svg>
);

export default FastFood;
