import React from 'react';
import styled from 'styled-components';

import { ShapeSVG } from './InfoIcons';

export function WaterOverlay(props) {
    return (
        <ShapeSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 176 27"
        preserveAspectRatio="none"
        color={'url(#water-gradient)'}
        {...props}
      >
        <defs>
            <linearGradient id="water-gradient" x1="88" y1="0" x2="88" y2="27" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0097E2" stopOpacity="0.19"/>
                <stop offset="1" stopColor="#0097E2"/>
            </linearGradient>
        </defs>
        <g>
        <path className="paths"
               d="M176 7.66047V27H0V7.66047C10.4407 9.37037 25.878 11.1392 44.3729 10.1958C52.9492 9.72414 60.3322 8.78075 66.6712 7.66047C75.5458 6.12746 82.4814 4.29964 88.3729 3.06143C107.39 -0.830056 135.803 -2.59891 176 7.66047Z" />
        </g>
      </ShapeSVG>
    )
}