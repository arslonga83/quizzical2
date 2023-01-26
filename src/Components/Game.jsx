import Question from "./Question"

export default function Game() {

  return (
    <div className='Game'>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <button className="check-btn">Check Answers</button>
    </div>
   

  )
}