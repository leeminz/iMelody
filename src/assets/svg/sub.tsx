import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import {IconProps} from '@interfaces';
import {colors} from '@util';

export const IconSeeAll = (props: IconProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M6.78 12.667a.668.668 0 00.52-.247l3.22-4a.667.667 0 000-.847l-3.333-4a.668.668 0 00-1.027.854L9.14 8l-2.88 3.573a.666.666 0 00.52 1.094z"
      fill="#22313F"
    />
  </Svg>
);

export const IconTick = (props: IconProps) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 12.857l6 6L21 6"
      stroke={colors.purple}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconEmpty = (props: IconProps) => (
  <Svg width={100} height={100} viewBox="0 0 94 94" fill="none" {...props}>
    <G clipPath="url(#clip0_797_4042)" fill="#B8BDC2">
      <Path d="M82.035 39.222L47 27.608 11.965 39.222.002 58.224l11.013 3.65v20.198L47 94l35.985-11.928V61.875l11.013-3.651-11.963-19.002zM71.48 41.525L47 49.64l-24.479-8.114L47 33.411l24.478 8.114zM8.408 55.208l6.541-10.39 27.846 9.23-6.54 10.39-27.847-9.23zm8.114 8.492l22.095 7.325 5.628-8.94v25.2l-27.723-9.19V63.7zm33.23 23.584v-25.2l5.63 8.94L77.476 63.7v14.394l-27.723 9.19zm7.992-22.845l-6.541-10.39 27.846-9.23 6.54 10.39-27.846 9.23zM44.246 0h5.508v18.392h-5.508V0zM18.344 8.416l4.77-2.754L32.31 21.59l-4.77 2.754-9.196-15.927zM61.689 21.591l9.196-15.927 4.77 2.754-9.196 15.927-4.77-2.754z" />
    </G>
    <Defs>
      <ClipPath id="clip0_797_4042">
        <Path fill="#fff" d="M0 0H94V94H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
