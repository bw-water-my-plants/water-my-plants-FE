import React from "react";
import { connect } from "react-redux"
import { fetchPlants } from '../../actions/actionCreators';
import PlantCard from './PlantCard';

export function PlantList(props) {
    return(
        <ul>
            {
                props.plants.map(plant => {
                    return <PlantCard plant={plant} />;
                })
            }
        </ul>
    )
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