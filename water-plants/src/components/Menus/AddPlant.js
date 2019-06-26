import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${Colors.Primary};
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
    width: 80%;
    input{
        background: none;
        border: none;
        font-size: 1.6rem;
        border-bottom: 1px solid black;
        width: 80%;
        height: 2rem;
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
                <input
                    type='number'
                    name='height'
                />
            </PlantForm>
        </Container>
    );
}