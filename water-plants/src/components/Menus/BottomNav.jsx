import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { XIcon } from '../Vectors/Elements';
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

const NavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`;
export class BottomNav extends React.Component {

    render() {
        return (
            <Bar>
                <NavButton>
                    <XIcon color='white' svgHeight='70%' />
                </NavButton>
            </Bar>
        );
    }
}