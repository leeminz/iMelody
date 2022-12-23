import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {IconProps} from '@interfaces';

export const IconShow = (props: IconProps) => (
  <Svg width={30} height={30} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect
      x={32}
      width={32}
      height={32}
      rx={16}
      transform="rotate(90 32 0)"
      fill="#E3E5E7"
    />
    <Path
      d="M8 12.67a1.143 1.143 0 01.423-.89l6.856-5.52a1.143 1.143 0 011.452 0l6.856 5.714a1.145 1.145 0 01-1.462 1.76l-6.126-5.109-6.125 4.937A1.142 1.142 0 018 12.671z"
      fill="#22313F"
    />
  </Svg>
);

export const IconPlay = (props: IconProps) => (
  <Svg width={25} height={25} viewBox="0 0 32 32" fill="none" {...props}>
    <Path d="M7 5l18.333 11L7 27V5z" fill="#22313F" />
  </Svg>
);

export const IconPause = (props: IconProps) => (
  <Svg width={25} height={25} viewBox="0 0 32 32" fill="none" {...props}>
    <Path d="M7 27h6.286V5H7v22zM19.571 5v22h6.286V5h-6.286z" fill="#22313F" />
  </Svg>
);

export const IconQuit = (props: IconProps) => (
  <Svg width={30} height={30} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M17.88 16l5.733-5.72a1.339 1.339 0 00-1.893-1.893L16 14.12l-5.72-5.733a1.339 1.339 0 10-1.893 1.893L14.12 16l-5.733 5.72a1.334 1.334 0 000 1.893 1.334 1.334 0 001.893 0L16 17.88l5.72 5.733a1.336 1.336 0 002.185-.433 1.334 1.334 0 00-.292-1.46L17.88 16z"
      fill="#22313F"
    />
  </Svg>
);
