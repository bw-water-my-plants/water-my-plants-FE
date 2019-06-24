import ReactDOM from 'react-dom'
import React from 'react'
import { Illustration, Hemisphere, Shape, Ellipse } from 'react-zdog'


export default function Plant(props) {
    return (
        <Illustration zoom={8}>
            <Ellipse diameter={20} rotate={{ x: -TAU / 3 }} translate={{ y: 15, z: -100 }} stroke={4} color="#373740" fill />
        </Illustration>
    )
}
