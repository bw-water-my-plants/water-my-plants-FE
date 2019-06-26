import React from 'react';
import styled from 'styled-components';

export const ClockIcon = styled(clock)`
    .paths{
        fill: none;
        stroke: ${props => (props.color ? props.color : '#0097e2')};
        stroke-miterlimit: ${props => (props.mitter ? props.mitter : '10')};;
        stroke-width: ${props => (props.strokeWidth ? props.strokeWidth : '12px')};
    }
`;

function clock(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267 267" width={props.width} height={props.height}>
          <g>
            <circle className="paths" cx="133.5" cy="133.5" r="127.5" />
            <polyline className="paths" points="161 108 133 133 133 48" />
          </g>
      </svg>
    );
}