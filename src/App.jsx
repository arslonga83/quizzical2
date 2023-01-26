import './App.css'
import React from 'react'
import Intro from './Components/Intro'
import Game from './Components/Game'
import blob1 from "./assets/blob-bottom.png"
import blob2 from "./assets/blob-top.png"

function App() {

  const [start, setStart] = React.useState(false)
  
  return (
    <div className="App">
      {start ? <Game /> : <Intro setStart={setStart}/>} 
      <img className="blob-bottom" src={blob1}/>
      <img className="blob-top" src={blob2}/>
    </div>
  )
}

export default App
