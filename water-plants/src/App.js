import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Ellipse, Shape, RoundedRect, useRender, Hemisphere } from 'react-zdog'
// New react-spring target, for native animation outside of React
import { a, useSpring } from 'react-spring/zdog'
import './App.css'

/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2
const Dirt = (props) => (
  <Hemisphere diameter={20} stroke={false} color='#734C08' backface='#EA0' rotate={{ x: TAU / 4 }}/>
);

/** --- Assembly ----------------------------------------- */
function Guy() {
  // Change motion every second
  const [up, setUp] = useState(true)
  useEffect(() => void setInterval(() => setUp(previous => !previous), 450), [])
  // Turn static values into animated values
  const { rotation, color, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#EA0' : 'tomato', rotation: up ? 0 : Math.PI })
  // useRender allows us to hook into the render-loop
  const ref = useRef()
  let t = 0
  useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)))
  return (
      <a.Anchor ref={ref} rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))}>
        <Dirt>
        </Dirt>
        <Shape
          translate={{y: -10, x: 0}}
          path={[
            { x: 0, y: 0 },   // start
            { arc: [
              { x:  3, y: 0 }, // corner
              { x:  3, y:  -5 }, // end point
            ]},
            { arc: [ // start next arc from last end point
              { x:  3, y:  -10 }, // corner
              { x:  0, y:  -10 }, // end point
            ]},
            { arc: [ // start next arc from last end point
              { x:  -3, y:  -10 }, // corner
              { x:  -3, y:  -15 }, // end point
            ]},
            { arc: [ // start next arc from last end point
              { x:  -3, y:  -20 }, // corner
              { x:  0, y:  -20 }, // end point
            ]},
          ]}
          closed={false}
          stroke={2}
          color='#038C25'
      />
      </a.Anchor>
  )
}
export default function App(props) {
  return (
    <Illustration zoom={8} >
      <Ellipse diameter={20} rotate={{ x: -TAU / 3 }} translate={{ y: 15, z: -100 }} stroke={4} color="#373740" fill />
      <Guy />
    </Illustration>
  )
}
