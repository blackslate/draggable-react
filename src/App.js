import React, { useEffect, useRef } from 'react'
import './App.css';

import {
    detectMovement
  , setTrackedEvents
  , getPageXY
} from './drag'


function App() {
  const dragRef = useRef()

  let dragMe
    , offset
    , cancelTracking


  const drag = (event) => {
    const { x, y } = getPageXY(event)

    dragMe.style.left = (offset.x + x )+ "px"
    dragMe.style.top =  (offset.y + y )+ "px"
  }


  const drop = () => {
    setTrackedEvents(cancelTracking)
    dragMe.style = {}
    flashDiv()
  }


  const startDrag = (event) => {
    const { x, y } = getPageXY(event)

    const { left, top } = dragMe.getBoundingClientRect()
    offset = { x: left - x, y: top - y }

    const options = {
      event
    , drag
    , drop
    }

    cancelTracking = setTrackedEvents(options)
  }


  const checkForDrag = (event) => {
    event.preventDefault()

    detectMovement(event, 16)
    .then(
      () => startDrag(event)
     )
    .catch(flashDiv)
  }


  useEffect(() => {
    // eslint-disable-next-line
    dragMe = dragRef.current
    dragMe.addEventListener("touchstart", checkForDrag, false)
  })


  const flashDiv = () => {
    dragMe.classList.add("flash")
    setTimeout(() => dragMe.classList.remove("flash"), 200)
  }


  return (
    <main>
      <div className="red"></div>
      <div className="green"></div>
      <div className="blue"></div>

      <div
        className="draggable unselectable"
        onMouseDown={checkForDrag}
        ref={dragRef}
      />
    </main>
  );
}

export default App;
