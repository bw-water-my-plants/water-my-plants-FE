import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import exampleImage from '../../assets/images/example_plant.jfif';
const Card = styled.li`
    width: 90vw;
    height: 20vw;
    background: ${Colors.Light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;
`;

const PlantProfile = styled.div`
    flex-grow: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::after {
        content: '';
        height:85%;
        width:1px;
        border-right: 1px solid black;
        opacity: 0.1;
    }
`;

const InfoBox = styled.div`
    flex-grow: 4;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PlantName = styled.header`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PlantImage = styled.img`
    width: 20vw;
    height: 20vw;
`;
export default function PlantCard(props) {
    return(
        <Card>
            <PlantProfile>
                <PlantImage src={exampleImage} alt="Plant"/>
                <PlantName>
                    <h2>Plant Name</h2>
                    <h3>Species Name</h3>
                </PlantName>
            </PlantProfile>

            <InfoBox>

            </InfoBox>
        </Card>
    )
}