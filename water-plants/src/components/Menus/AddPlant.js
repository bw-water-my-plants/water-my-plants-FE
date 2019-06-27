import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { XIcon, MinusIcon, TriangleArrow } from '../Vectors/Elements';
import exampleImage from '../../assets/images/example_plant.jfif';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${Colors.Light};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 0;
    font-family: 'Roboto', sans-serif;
    position: fixed;
    bottom: 4.5rem;
    padding-top: 9rem;
`;

const PlantForm = styled.form`
    width: 90%;

    h2{
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
    input{
        background: none;
        border: none;
        font-size: 1.6rem;
        border-bottom: 1px solid black;
        width: 80%;
        height: 2rem;
        margin-bottom: 1.5rem;
        transition: all 0.2s;

        &:focus{
            outline: none;
            border-bottom-color: ${Colors.Primary};
        }
    }

    .height-input{
        input{
            width:25%;
        }

        span{
            font-size: 1.6rem;
            margin-left: 1.6rem;
        }
    } 

`;

const FrequencyPicker = styled.div`
    height: 30%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    > div{
        display: flex;
        justify-content:space-between;
        align-items: center;
        width: 100%;
    }

    h2{
        font-size: 1.8rem;
    }
    span{
        font-size: 3.6rem;
    }
    button{
        height: 5rem;
        width: 5rem;
        background:none;
        background-color:${Colors.Primary};
        border: none;
        border-radius: 50%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        &:focus{
            outline: none;
        }
    }
`;

const PicturePicker = styled.div`
    height: 40%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        height: 80%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    svg{
        filter: drop-shadow( 0px 4px 2px rgba(0, 0, 0, 0.25));
    }
    svg:last-child{
        transform: translateY(-20%) rotate(180deg);
        filter: drop-shadow( 0px -4px 2px rgba(0, 0, 0, 0.25));
    }

`;

export function AddPlant(props) {

    return (
        <Container>
            <PlantForm>
                <h2>Name</h2>
                <input
                    type='text'
                    name='name'
                />
                <h2>Type</h2>
                <input
                    type='text'
                    name='type'
                />
                <h2>Height</h2>
                <span className="height-input">
                    <input
                        type='number'
                        name='height'
                    />

                    <span>cm</span>
                </span>
            </PlantForm>

            <FrequencyPicker>
                <h2>I would like to water</h2>
                <div>
                    <button>
                        <MinusIcon color='white' svgHeight='80%' svgWidth='80%' strokeWidth='1px'/>
                    </button>
                    <span>2</span>
                    <button>
                        <XIcon color='white' svgHeight='80%' svgWidth='80%' strokeWidth='1px'/>
                    </button>
                </div>
                <h2>days a week</h2>
            </FrequencyPicker>

            <PicturePicker>
                <TriangleArrow color={Colors.Primary} svgWidth='12%'/>
                <img src={exampleImage} alt="plant"/>
                <TriangleArrow color={Colors.Primary} svgWidth='12%'/>
            </PicturePicker>
        </Container>
    );
}