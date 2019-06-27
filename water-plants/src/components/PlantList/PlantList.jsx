import React from "react";
import { connect } from "react-redux"
import { fetchPlants, setCurrentPlant, toggleForm } from '../../actions/actionCreators';
import styled from 'styled-components';
import PlantCard from './PlantCard';

const StyledList = styled.ul`
    padding-bottom: 5rem;
    li{
        margin-bottom: 2rem;
    }
`

export class PlantList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openPlant: null,
        }
    }
    componentDidMount() {
        this.props.fetchPlants();
    }

    openPlant = (id) => {
        if (id === this.state.openPlant) {
            id = null;
        }
        this.setState({ openPlant: id });
    }
    render() {
        return(
            <StyledList>
                {
                    this.props.plants.map(plant => {
                        return <PlantCard 
                            key={plant.plant_id}
                            plant={plant}
                            open={plant.plant_id === this.state.openPlant ? true : false}
                            expandPlant={this.openPlant}
                            editPlant={this.props.setCurrentPlant}
                            showForm={this.props.toggleForm}
                            />;
                    })
                }
            </StyledList>
        )
    }
}

function mapStateToProps(state) {
    return {
      plants: state.plants.plants,
      fetching: state.api.fetching,
      error: state.api.error,
      posting: state.api.posting,
    };
  }
export default connect(
    mapStateToProps,
    {
        fetchPlants,
        setCurrentPlant,
        toggleForm,
    }
)(PlantList);