import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';

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
        </Container>
    );
}