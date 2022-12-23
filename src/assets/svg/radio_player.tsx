import React from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {colors} from '@util';
import {IconProps} from '@interfaces';

export const IconDown = (props: IconProps) => (
  <Svg width={30} height={30} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M25 12.495a1.285 1.285 0 01-.476 1.003l-7.713 6.21a1.286 1.286 0 01-1.633 0L7.464 13.28A1.287 1.287 0 019.11 11.3L16 17.046l6.892-5.553A1.286 1.286 0 0125 12.495z"
      fill="#22313F"
    />
  </Svg>
);

export const IconPlayBig = (props: IconProps) => (
  <Svg width={60} height={60} viewBox="0 0 64 64" fill="none" {...props}>
    <Path
      d="M32 8C18.746 8 8 18.746 8 32s10.746 24 24 24 24-10.746 24-24S45.254 8 32 8zm7.72 24.37l-11.7 8.512a.43.43 0 01-.68-.348V23.52a.428.428 0 01.68-.349l11.7 8.508a.422.422 0 010 .69z"
      fill="#22313F"
    />
  </Svg>
);

export const IconPauseBig = (props: IconProps) => (
  <Svg width={60} height={60} viewBox="0 0 64 64" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56 32a24 24 0 11-48 0 24 24 0 0148 0zm-33-6a3 3 0 016 0v12a3 3 0 01-6 0V26zm15-3a3 3 0 00-3 3v12a3 3 0 006 0V26a3 3 0 00-3-3z"
      fill="#22313F"
    />
  </Svg>
);

export const IconPrevious = (props: IconProps) => (
  <Svg width={60} height={60} viewBox="0 0 64 64" fill="none" {...props}>
    <Path
      d="M43.05 44.225L28.625 34.05c-1.4-1-1.4-3.1 0-4.075l14.425-10.2c1.675-1.15 3.95.025 3.95 2.05v20.35c0 2.025-2.275 3.2-3.95 2.05zM22 19.5v25c0 1.375-1.125 2.5-2.5 2.5a2.507 2.507 0 01-2.5-2.5v-25c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5z"
      fill={props.isActive ? colors.black : colors.grey}
    />
  </Svg>
);

export const IconNext = (props: IconProps) => (
  <Svg width={60} height={60} viewBox="0 0 64 64" fill="none" {...props}>
    <Path
      d="M20.95 44.225L35.375 34.05c1.4-1 1.4-3.1 0-4.075l-14.425-10.2c-1.675-1.15-3.95.025-3.95 2.05v20.35c0 2.025 2.275 3.2 3.95 2.05zM42 19.5v25c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5v-25c0-1.375-1.125-2.5-2.5-2.5a2.507 2.507 0 00-2.5 2.5z"
      fill={props.isActive ? colors.black : colors.grey}
    />
  </Svg>
);
