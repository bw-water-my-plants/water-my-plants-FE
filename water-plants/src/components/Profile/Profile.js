import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';

export default function Profile(props) {
    return (
        <SDProfileEnv>
            <SDProfileContainer>
                <h2>Profile information</h2>
                <div>
                    Username: <span>Ivana</span>
                </div>
                <div>
                    Email: <span>Ivana</span>
                </div>
                <div>
                    Phone number: <span>Ivana</span>
                </div>
                <div>
                    Password: <span>Ivana</span>
                </div>
            </SDProfileContainer>
        </SDProfileEnv>
    );
}

const SDProfileEnv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SDProfileContainer = styled.div``;
