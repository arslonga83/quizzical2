import Questions from "./Questions"
import React from 'react'

export default function Game() {

const [questionsData, setQuestionsData] = React.useState([])

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json())
      .then(data => setQuestionsData(data.results))
  }, [])

  
console.log(questionsData)

  return (
    <div className='Game'>
      <Questions questionsData={questionsData}/>
      
      <button className="check-btn">Check Answers</button>
    </div>
   

  ) 
}