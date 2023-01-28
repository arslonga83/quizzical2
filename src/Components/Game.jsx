import Questions from "./Questions"
import React from 'react'
import {nanoid} from 'nanoid'
import {decode} from 'html-entities' 

export default function Game() {

const [questionsArray, setQuestionsArray] = React.useState([])
const [answered, setAnswered] = React.useState(false)
const [gameCount, setGameCount] = React.useState(0)
const [rightCount, setRightCount] = React.useState(0)


// helper function to mix up the right and wrong answers
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// make API call and store data in questions array
  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
          .then(res => res.json())
          .then(data => {
            setQuestionsArray(data.results.map(result => {
              let obj = {
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
              shuffleArray(obj.answers)
              return obj
            }))
          })
      }, [gameCount])
        
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
          setRightCount(prev => prev + 1)
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
  setGameCount(prev => prev + 1) //triggers new API call
  setAnswered(false) //enables buttons
  setRightCount(0)
}

  return (
    <div className='Game'>
       <Questions questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} answered={answered} />
      {answered && <span>You got {rightCount}/5 correct!</span>}
      {!answered ? 
      <button className="check-btn" onClick={checkAnswers}>Check Answers</button> :
      <button className="replay-btn" onClick={replay}>Play Again</button>}
    </div>
  ) 
}