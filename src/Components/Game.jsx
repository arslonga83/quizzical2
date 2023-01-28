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
      }, [])
        

console.log(questionsArray)

// function checkAnswers() {
//   questionsArray.map(question => {
//     question.answers.map(answer => {
//       if (answer.selected && answer.correct) {
//         console.log('Correct!') 
//       }
//       if (answer.selected && !answer.correct) {
//         console.log('Wrong answer')
//       }
//     })
//   })
// }

function checkAnswers() {
  setQuestionsArray(prev => {
    let newArray = []
   //  map over all the questions
    prev.map(question => {
     
       // add results to the array
       question.answers.map(answer => {
        if (answer.selected && answer.correct) {
          answer.result = 'Correct!' 
          answer.selected = false
        }
        if (answer.selected && !answer.correct) {
          answer.result = 'Wrong answer'
          answer.selected = false
        } 
       })
       // push the updated question
       newArray.push(question)
     } )
     return newArray
    })
    
  }
  




  return (
    <div className='Game'>
      <Questions questionsArray={questionsArray} setQuestionsArray={setQuestionsArray}/>
      <button className="check-btn" onClick={checkAnswers}>Check Answers</button>
    </div>
   

  ) 
}