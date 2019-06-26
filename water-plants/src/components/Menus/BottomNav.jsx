import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { XIcon } from '../Vectors/Elements';
import { CupIcon } from '../Vectors/InfoIcons';
import { connect } from 'react-redux';

const Bar = styled.nav`
    height: 4.5rem;
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: ${Colors.Primary};
    display: flex;
    justify-content: space-around;
    bottom: 0;
`;

const NavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;

    &.delete svg{
        transform: rotate(45deg);
    }
`;
export default class BottomNav extends React.Component {

    render() {
        return (
            <Bar>
                <NavButton>
                    <XIcon color='white' svgHeight='70%' svgWidth='3rem' strokeWidth='1px'/>
                </NavButton>
                <NavButton>
                    <CupIcon color='white' svgHeight='70%' svgWidth='2.2rem' strokeWidth='12px'/>
                </NavButton>
                <NavButton className='delete'>
                    <XIcon color='white' svgHeight='70%' svgWidth='3rem' strokeWidth='1px'/>
                </NavButton>
            </Bar>
        );
    }
}