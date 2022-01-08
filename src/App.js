import React, { useEffect, useRef } from 'react'
import './App.css';

import {
    detectMovement
  , startTracking
} from './drag'


function App() {
  const dragRef = useRef()

  let dragMe
    , cancelTracking
    , timeOut


  const drop = () => {
    cancelTracking()
    dragMe.style = {}
    flashDiv("You dragged me!")
  }


  const startDrag = (event) => {
    reset()
    dragMe.innerHTML = "Wheeee!"

    const options = {
      event
    , drop
    }

    cancelTracking = startTracking(options)
  }


  const checkForDrag = (event) => {
    event.preventDefault()

    dragMe.innerHTML = "Drag me!"

    detectMovement(event, 16)
    .then(() => startDrag(event))
    .catch(flashDiv)
  }


  useEffect(() => {
    // eslint-disable-next-line
    dragMe = dragRef.current
    dragMe.addEventListener("touchstart", checkForDrag, false)
  })


  const reset = () => {
    clearTimeout(timeOut)
    dragMe.classList.remove("flash")
    dragMe.innerHTML = "Drag me!"
  }


  const flashDiv = (text) => {
    dragMe.classList.add("flash")

    if (text === "timeOut") { // called by reject
      clearTimeout(timeOut)
      const options = { once: true }
      document.body.addEventListener("mouseup", reset, options)
      document.body.addEventListener("touchend", reset, options)

    } else {
      timeOut = setTimeout(reset, 1000)
    }

    dragMe.innerHTML = text
  }


  return (
    <main>
      <div className="red"></div>
      <div className="green"></div>
      <div className="blue"></div>

      <div className="container">
        <div
          className="draggable unselectable"
          onMouseDown={checkForDrag}
          ref={dragRef}
        >
          Drag me!
        </div>
      </div>
    </main>
  );
}

export default App;
