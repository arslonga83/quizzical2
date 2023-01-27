import Questions from "./Questions"
import React from 'react'
import {nanoid} from 'nanoid'
import {decode} from 'html-entities' 

export default function Game() {

const [questionsArray, setQuestionsArray] = React.useState([])

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
                    id: nanoid()
                  },
                  {
                    answer: decode(result.incorrect_answers[0]),
                    correct: false,
                    selected: false, 
                    id: nanoid()
                  },
                  {
                    answer: decode(result.incorrect_answers[1]),
                    correct: false,
                    selected: false,
                    id: nanoid()
                  },
                  {
                    answer: decode(result.incorrect_answers[2]),
                    correct: false,
                    selected: false,
                    id: nanoid()
                  }
                ]
              }
            }))
          })
      }, [])
        

console.log(questionsArray)

  return (
    <div className='Game'>
      <Questions questionsArray={questionsArray}/>
      <button className="check-btn">Check Answers</button>
    </div>
   

  ) 
}