import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { XIcon, MinusIcon, TriangleArrow } from '../Vectors/Elements';
import exampleImage from '../../assets/images/example_plant.jfif';
import { addDay, minusDay, nextPicture, prevPicture, updatePlant, addPlant, toggleForm } from '../../actions/actionCreators';
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
    transform: translateY(110%);
    transition: all 0.3s;
    transition-timing-function: ease-in-out;

    &.show{
        transform: translateY(0%);
    }
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

export class AddPlant extends React.Component {
    
    nameRef = React.createRef();
    typeRef = React.createRef();
    heightRef = React.createRef();

    componentDidUpdate(prevProps) {
        if (this.props.currentPlant){
            if ( prevProps.currentPlant !== this.props.currentPlant) {
                this.nameRef.current.value = this.props.currentPlant.name;
                this.typeRef.current.value = this.props.currentPlant.plant_type;
                this.heightRef.current.value = this.props.currentPlant.height;
            }
        }
    }

    addPlant = () => {
        const plant = {
            name: this.nameRef.current.value,
            img_id: this.props.picture,
            height: parseInt(this.heightRef.current.value) || 0,
            plant_type: this.typeRef.current.value,
            watering_frequency: this.props.freq,
            last_watered_at: (new Date()).toISOString(),
        }

        this.props.addPlant(plant)
            .then(() => {
                this.props.toggleForm();
            });
    }
    
    render() {
        return (
          <Container className={this.props.show ? 'show' : ''}>
            <PlantForm>
              <h2>Name</h2>
              <input ref={this.nameRef} type="text" name="name" />
              <h2>Type</h2>
              <input ref={this.typeRef} type="text" name="type" />
              <h2>Height</h2>
              <span className="height-input">
                <input ref={this.heightRef} type="number" name="height" />
    
                <span>cm</span>
              </span>
            </PlantForm>
    
            <FrequencyPicker>
              <h2>I would like to water every</h2>
              <div>
                <button onClick={this.props.minusDay}>
                  <MinusIcon
                    color="white"
                    svgHeight="80%"
                    svgWidth="80%"
                    strokeWidth="1px"
                  />
                </button>
                <span>{this.props.freq}</span>
                <button onClick={this.props.addDay}>
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
              onClick={this.props.prevPicture}
              />
              <img src={exampleImage} alt="plant" />
              <TriangleArrow
              color={Colors.Primary}
              svgWidth="12%"
              onClick={this.props.nextPicture}
              />
            </PicturePicker>
    
            <AddButton onClick={this.addPlant}>Add</AddButton>
          </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
      posting: state.api.posting,
      freq: state.form.freq,
      picture: state.form.picture,
      currentPlant: state.form.currentPlant,
      show: state.menus.formShow,
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
        addPlant,
        toggleForm,
    }
)(AddPlant);