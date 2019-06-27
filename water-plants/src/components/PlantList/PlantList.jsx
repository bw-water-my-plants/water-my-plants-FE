import React from "react";
import { connect } from "react-redux"
import { fetchPlants } from '../../actions/actionCreators';
import styled from 'styled-components';
import PlantCard from './PlantCard';

const StyledList = styled.ul`
    li{
        margin-bottom: 2rem;
    }
`

export class PlantList extends React.Component {
    componentDidMount() {
        this.props.fetchPlants();
    }
    render() {
        return(
            <StyledList>
                {
                    this.props.plants.map(plant => {
                        return <PlantCard plant={plant} />;
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
        fetchPlants
    }
)(PlantList);