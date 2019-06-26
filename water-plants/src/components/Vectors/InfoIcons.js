import React from 'react';
import styled from 'styled-components';

const ClockSVG = styled.svg`
    ${props => (`
        width: ${props.svgWidth};
        height: ${props.svgHeight};
    `)};
    .paths{
        fill: none;
        stroke: ${props => (props.color ? props.color : '#0097e2')};
        stroke-miterlimit: ${props => (props.mitter ? props.mitter : '10')};;
        stroke-width: ${props => (props.strokeWidth ? props.strokeWidth : '12px')};
    }
`;

export function ClockIcon(props) {
    return (
      <ClockSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267 267" {...props}>
          <g>
            <circle className="paths" cx="133.5" cy="133.5" r="127.5" />
            <polyline className="paths" points="161 108 133 133 133 48" />
          </g>
      </ClockSVG>
    );
}