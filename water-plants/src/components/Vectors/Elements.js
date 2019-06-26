import React from 'react';
import styled from 'styled-components';

import { ShapeSVG } from './InfoIcons';

export function WaterOverlay(props) {
    return (
        <ShapeSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 236 45.75"
        {...props}
      >
        <g>
        <path className="paths"
               d="M236,13V33.75a12,12,0,0,1-12,12H12a12,12,0,0,1-12-12V13a218.46,218.46,0,0,0,59.5,4.25A200.14,200.14,0,0,0,89.39,13c11.87-2.59,21.21-5.69,29.11-7.75C144-1.4,182.08-4.44,236,13Z" />
        </g>
      </ShapeSVG>
    )
}