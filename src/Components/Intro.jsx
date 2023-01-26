export default function Intro(props) {

  function handleClick() {
    props.setStart(true)
  }

  return (
    <div className="Intro">
      <h1>Quizzical</h1>
      <h3>A trivia game built with ReactJS</h3>
      <button onClick={handleClick}>Start Quiz</button>
    </div>
  )
}