import blob1 from "../assets/blob-bottom.png"
import blob2 from "../assets/blob-top.png"


export default function Intro() {
  return (
    <div className="Intro">
      <h1>Quizzical</h1>
      <h3>A trivia game built with ReactJS</h3>
      <button>Start Quiz</button>
      <img className="blob-bottom" src={blob1}/>
      <img className="blob-top" src={blob2}/>
    </div>
  )
}