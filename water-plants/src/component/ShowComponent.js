import React from "react";
import { connect } from "react-redux"

 class ShowComponent extends React.Component {
render(){
    return (
        <div>
            count: {this.props.count}
                <h1>HEllo component</h1>
                <button onClick={() => this.props.dispatch({ type: "INCREMENT"})}>INCREMENT</button><br/>
                <button onClick={() => this.props.dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            </div>
        )
    }
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(ShowComponent)