import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { connect } from 'react-redux';

const Bar = styled.nav`
    height: 4.5rem;
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: ${Colors.Primary};
    display: flex;
    justify-content: space-around;
`;
export class BottomNav extends React.Component {

    render() {
        return (
            <Bar>
                
            </Bar>
        );
    }
}