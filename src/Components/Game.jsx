import Questions from "./Questions"
import React from 'react'
import {nanoid} from 'nanoid'
import {decode} from 'html-entities' 

export default function Game() {

const [questionsArray, setQuestionsArray] = React.useState([])
const [answered, setAnswered] = React.useState(false)
const [gameCount, setGameCount] = React.useState(0)

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
          .then(res => res.json())
          .then(data => {
            setQuestionsArray(data.results.map(result => {
              return {
                question: decode(result.question),
                id: nanoid(),
                answers: [
                  {
                    answer: decode(result.correct_answer),
                    correct: true,
                    selected: false,
                    id: nanoid(),
                    result: ''
                  },
                  {
                    answer: decode(result.incorrect_answers[0]),
                    correct: false,
                    selected: false, 
                    id: nanoid(),
                    result: ''
                  },
                  {
                    answer: decode(result.incorrect_answers[1]),
                    correct: false,
                    selected: false,
                    id: nanoid(),
                    result: ''
                  },
                  {
                    answer: decode(result.incorrect_answers[2]),
                    correct: false,
                    selected: false,
                    id: nanoid(),
                    result: ''
                  }
                ]
              }
            }))
          })
      }, [gameCount])
        

console.log(questionsArray)

function checkAnswers() {
  setAnswered(true)
  setQuestionsArray(prev => {
    let newArray = []
   //  map over all the questions
    prev.map(question => {
     
       // add results to the array
       question.answers.map(answer => {
        if (answer.selected && answer.correct) {
          answer.result = 'correct' 
          answer.selected = false
        }
        if (answer.selected && !answer.correct) {
          answer.result = 'wrong'
          answer.selected = false
        } 
       })
       // push the updated question
       newArray.push(question)
     } )
     return newArray
    })
    
  }
  
function replay() {
  setGameCount(prev => prev + 1)
  setAnswered(false)
}



  return (
    <div className='Game'>
      <Questions questionsArray={questionsArray} setQuestionsArray={setQuestionsArray}/>
      {!answered ? 
      <button className="check-btn" onClick={checkAnswers}>Check Answers</button> :
      <button className="replay-btn" onClick={replay}>Play Again</button>}
    </div>
   

  ) 
}