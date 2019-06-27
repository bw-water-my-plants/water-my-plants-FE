import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { XIcon, MinusIcon, TriangleArrow } from '../Vectors/Elements';
import exampleImage from '../../assets/images/example_plant.jfif';
import { addDay, minusDay, nextPicture, prevPicture, updatePlant, addPlant } from '../../actions/actionCreators';
import { connect } from 'react-redux';

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

const AddButton = styled.button`
    padding: 1rem 4rem;
    background: none;
    border: none;
    background-color: ${Colors.Primary};
    color: ${Colors.Light};
    font-size: 1.8rem;
    font-weight: 300;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export function AddPlant(props) {
    const nameRef = React.createRef();
    const typeRef = React.createRef();
    const heightRef = React.createRef();

    const addPlant = () => {
        const plant = {
            name: nameRef.current.value,
            img_id: props.picture,
            height: parseInt(heightRef.current.value) || 0,
            plant_type: typeRef.current.value,
            watering_frequency: props.freq,
            last_watered_at: (new Date()).toISOString(),
        }

        props.addPlant(plant);
    }

    return (
      <Container>
        <PlantForm>
          <h2>Name</h2>
          <input ref={nameRef} type="text" name="name" />
          <h2>Type</h2>
          <input ref={typeRef} type="text" name="type" />
          <h2>Height</h2>
          <span className="height-input">
            <input ref={heightRef} type="number" name="height" />

            <span>cm</span>
          </span>
        </PlantForm>

        <FrequencyPicker>
          <h2>I would like to water every</h2>
          <div>
            <button onClick={props.minusDay}>
              <MinusIcon
                color="white"
                svgHeight="80%"
                svgWidth="80%"
                strokeWidth="1px"
              />
            </button>
            <span>{props.freq}</span>
            <button onClick={props.addDay}>
              <XIcon
                color="white"
                svgHeight="80%"
                svgWidth="80%"
                strokeWidth="1px"
              />
            </button>
          </div>
          <h2>days</h2>
        </FrequencyPicker>

        <PicturePicker>
          <TriangleArrow
          color={Colors.Primary}
          svgWidth="12%"
          onClick={props.prevPicture}
          />
          <img src={exampleImage} alt="plant" />
          <TriangleArrow
          color={Colors.Primary}
          svgWidth="12%"
          onClick={props.nextPicture}
          />
        </PicturePicker>

        <AddButton onClick={addPlant}>Add</AddButton>
      </Container>
    );
}

function mapStateToProps(state) {
    return {
      posting: state.api.posting,
      freq: state.form.freq,
      picture: state.form.picture,
      currentPlant: state.form.currentPlant,
    };
  }
export default connect(
    mapStateToProps,
    {
        addDay,
        minusDay,
        nextPicture,
        prevPicture,
        updatePlant,
        addPlant
    }
)(AddPlant);