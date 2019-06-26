import React from 'react';
import styled from 'styled-components';

const PathSVG = styled.svg`
    ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
    ${props => (props.svgWidth ? `width: ${props.svgHeight};` : null)}
    .paths{
        fill: none;
        stroke: ${props => (props.color ? props.color : '#0097e2')};
        stroke-miterlimit: ${props => (props.mitter ? props.mitter : '10')};;
        stroke-width: ${props => (props.strokeWidth ? props.strokeWidth : '12px')};
    }
`;

const ShapeSVG = styled.svg`
    ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
    ${props => (props.svgWidth ? `width: ${props.svgHeight};` : null)}
    .paths{
        fill: ${props => (props.color ? props.color : '#0097e2')};
        stroke: ${props => (props.color ? props.color : '#0097e2')};
        stroke-miterlimit: ${props => (props.mitter ? props.mitter : '10')};;
        stroke-width: ${props => (props.strokeWidth ? props.strokeWidth : '0px')};
    }
`;
export function ClockIcon(props) {
    return (
      <PathSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 267 267"
        {...props}
      >
        <g>
          <circle className="paths" cx="133.5" cy="133.5" r="127.5" />
          <polyline className="paths" points="161 108 133 133 133 48" />
        </g>
      </PathSVG>
    );
}

export function CupIcon(props) {
    return (
      <PathSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220.86 291.98"
        {...props}
      >
        <g>
        <path className="paths"
                d="M214.94,1,196.41,113.33,167.94,286h-121L5.94,1m190,113c-15.06,5-37.46,11.12-61.92,6-22.25-4.66-30.12-14.39-49.31-16-13.7-1.16-34,1.74-60.77,22" />
        </g>
      </PathSVG>
    );
}

export function HeightIcon(props) {
    return (
        <ShapeSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41 23"
        {...props}
      >
        <g>
        <path className="paths"
                d="M20.7071 1.29289C20.3166 0.902369 19.6834 0.902369 19.2929 1.29289L12.9289 7.65685C12.5384 8.04738 12.5384 8.68054 12.9289 9.07107C13.3195 9.46159 13.9526 9.46159 14.3431 9.07107L20 3.41421L25.6569 9.07107C26.0474 9.46159 26.6805 9.46159 27.0711 9.07107C27.4616 8.68054 27.4616 8.04738 27.0711 7.65685L20.7071 1.29289ZM0 2H41V0H0V2ZM21 23V2H19V23H21Z" />
        </g>
      </ShapeSVG>
    )
}