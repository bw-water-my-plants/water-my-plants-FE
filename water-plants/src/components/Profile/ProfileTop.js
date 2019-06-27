import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import profileImg from '../../assets/vectors/profile.svg';

export default class ProfileTop extends React.Component {
    render() {
        return (
            <SDProfileBlock>
                <SDImageDiv>
                    <img src={profileImg} alt="profile" />
                </SDImageDiv>
                <SDName>{this.props.username}</SDName>
            </SDProfileBlock>
        );
    }
}

const SDProfileBlock = styled.div`
    width: 100%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    background-color: ${Colors.Primary};
    color: white;
    font-size: 2rem;
    justify-content: flex-end;
`;

const SDImageDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    padding: 0;
    img {
        width: 100%;
        padding: 0;
    }
`;

const SDName = styled.div`
    margin-top: 20px;
    font-size: 2.5rem;
`;
