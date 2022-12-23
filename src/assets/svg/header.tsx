import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@interfaces';

export const IconMenu = (props: IconProps) => (
  <Svg width={30} height={30} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M22 9.2A1.2 1.2 0 0020.8 8H5.2a1.2 1.2 0 000 2.4h15.6A1.2 1.2 0 0022 9.2zm-16.8 6h21.6a1.2 1.2 0 010 2.4H5.2a1.2 1.2 0 010-2.4zm0 7.2H16a1.2 1.2 0 010 2.4H5.2a1.2 1.2 0 010-2.4z"
      fill="#22313F"
    />
  </Svg>
);

export const IconSearch = (props: IconProps) => (
  <Svg width={25} height={25} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18.215 17.276l2.598 2.597a.665.665 0 01-.94.94l-2.599-2.598a8.648 8.648 0 11.94-.94zm-6.567 1.69a7.317 7.317 0 100-14.635 7.317 7.317 0 000 14.634z"
      fill="#22313F"
    />
  </Svg>
);

export const IconBack = (props: IconProps) => (
  <Svg width={30} height={30} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M19.505 25a1.285 1.285 0 01-1.003-.476l-6.21-7.713a1.286 1.286 0 010-1.633l6.428-7.714A1.287 1.287 0 0120.7 9.11L14.954 16l5.553 6.892A1.286 1.286 0 0119.505 25z"
      fill="#22313F"
    />
  </Svg>
);
