import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import exampleImage from '../../assets/images/example_plant.jfif';
import { ClockIcon, CupIcon, HeightIcon } from '../Vectors/InfoIcons';
import { WaterOverlay } from '../Vectors/Elements';

const Card = styled.li`
    font-family: 'Roboto', sans-serif;
    width: 90vw;
    height: 20vw;
    background: ${Colors.Light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;
    transition: all 0.3s;
    transition-timing-function: ease-in-out;
    ${props => {
        if(!props.closed) {
            return(`
                height: 70vw;
                flex-direction: column;
            `)
        }
    }}
`;

const PlantProfile = styled.div`
    width: 78%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;
    transition-timing-function: ease-in-out;
    ${props => {
        if(!props.closed) {
            return(`
                height: 75%;
                width: 100%;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
            `)
        } else {
            return (`
                &::after {
                    content: '';
                    height:85%;
                    width:1px;
                    border-right: 1px solid black;
                    opacity: 0.1;
                }
                button {
                    display: none;
                }
            `)
        }
    }}
`;
const ActionButton = styled.button`
    background: none;
    border: none;
    color: ${Colors.Tertiary};
    font-size: 1.4em;
    width: 100%;
`;
const InfoBox = styled.div`
    width: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    ${props => {
        if(props.closed) {
            return(`
                > div{
                    display: none;
                }
                > button{
                    display: none;
                }
                div:last-child{
                    display: flex;
                }
            `)
        } else {
            return(`
                height: 25%;
                width: 100%;
                position: relative;
                > div{
                    &::after {
                        content: '';
                        height:70%;
                        width:1px;
                        border-right: 1px solid black;
                        opacity: 0.1;
                        position: absolute;
                        right: 0;
                    }
                }

                div:last-child{
                    &::after {
                        display: none;
                    }
                }
            `)
        }
    }}
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    
    span{
        font-size: 1.2em;
    }
`;

const PlantName = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
    line-height: 1.6;
    h3{
        font-style: italic;
        opacity: 0.5;
        font-size: 1.2em;
    }
    h2{
        font-size: 1.4em;
    }
`;

const PlantImage = styled.div`
    background: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    background-color: transparent;
    min-width: 20vw;
    height: 20vw;
    ${props => {
        if(!props.closed) {
            return(`
                height: 75%;
                width: 100%;
            `)
        }
    }}
`;

const MidContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    padding-top: 0.6rem;
    width: 100%;
`;
const WaterMe = styled.button`
    background: none;
    background-color: #0097E2;
    padding: 0.8rem 6.4rem;
    color: ${Colors.Light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.2rem;
    position: relative;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-left: 15%;
    svg{
        position: absolute;
        z-index: 0;
        left: 0;
        bottom: 0;
    }
    span{
        z-index: 1;
    }
`;
export default function PlantCard(props) {
    const expand = () => {
        props.expandPlant(props.plant.plant_id);
    }

    const edit = (e) => {
        e.stopPropagation();
        props.editPlant(props.plant);
        props.showForm();
    }
    const water = (e) => {
        e.stopPropagation();
        props.waterPlant(props.plant.plant_id);
    }
    const deletePlant = (e) => {
        e.stopPropagation();
        props.deletePlant(props.plant.plant_id);
    }

    const calculateDays = () => {
        const now = (new Date()).getTime();
        const wateringDate = Date.parse(props.plant.next_watering_at);
        const delta = wateringDate - now;
        const days = Math.floor(delta / (1000 * 60 * 60 * 24))
        return days;
    }

    const calculatePercentage = () => {
        return Math.floor((calculateDays() / props.plant.watering_frequency) * 100);
    }
    return(
        <Card closed={!props.open}>
            <PlantProfile closed={!props.open}>
                <PlantImage imgUrl={exampleImage} closed={!props.open} onClick={expand}/>
                <MidContainer>
                    <PlantName>
                        <h2>{props.plant.name}</h2>
                        <h3>{props.plant.plant_type}</h3>
                    </PlantName>
                    <WaterMe onClick={water}>
                        <span>Water Me</span>
                    </WaterMe>
                    </MidContainer>
            </PlantProfile>

            <InfoBox closed={!props.open}>
                <InfoItem>
                    <ActionButton onClick={edit}>Edit...</ActionButton>
                    <ActionButton onClick={deletePlant}>Delete...</ActionButton>
                </InfoItem>
                <InfoItem>
                    <HeightIcon svgHeight='30%'strokeWidth='0px' color={Colors.Tertiary}/>
                    <span>{props.plant.height} cm</span>
                </InfoItem>
                <InfoItem>
                    <CupIcon svgHeight='40%' strokeWidth='18px' color={Colors.Tertiary}/>
                    <span>{calculatePercentage()}%</span>
                </InfoItem>
                <InfoItem>
                    <ClockIcon svgHeight='40%' strokeWidth='18px' color={Colors.Tertiary}/>
                    <span>{calculateDays()} days</span>
                </InfoItem>
            </InfoBox>
        </Card>
    )
}