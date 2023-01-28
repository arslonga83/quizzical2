import React from 'react'

export default function Questions(props) {

function handleClick(e) {
  props.setQuestionsArray(prev => {
   let newArray = []
  //  find the right question
   prev.map(question => {
    if (question.id === e.target.parentNode.id) {
      // update selected one those answers
      question.answers.map(answer => {
        if (answer.id === e.target.id) {
          answer.selected = true
        } else {
          answer.selected = false
        }
      })
      // push the updated question
      newArray.push(question)
    } else {
      // push the other questions unchanged
      newArray.push(question)
    }
   })
   return newArray
})
}

// button styles to to use with selected prop
const clearStyle = {
  backgroundColor: 'transparent'
}
const selectedStyle = {
  backgroundColor: '#D6DBF5'
}
const rightAnswerStyle = {
  backgroundColor: '#94D7A2',
  color: '#293264'
}
const wrongAnswerStyle = {
  backgroundColor: '#F8BCBC'
}

// return one question card for each item in the array
  return (
    props.questionsArray.map(question => {
      return (
        <div className="Question" key={question.id}>
          <p>{question.question}</p>
          <div className="answers" id={question.id}>
            {question.answers.map(answer => {
              console.log(answer.result)
              return <button 
                        id={answer.id}
                        key={answer.id}
                        style={answer.selected ? 
                              selectedStyle : 
                              answer.correct && props.answered ? 
                              rightAnswerStyle :
                              answer.result === 'wrong' ? 
                              wrongAnswerStyle :
                              clearStyle}
                        onClick={handleClick}
                        disabled={props.answered}
                        >
                        {answer.answer}
                      </button>
            })}
          </div>
        </div>
      )
    })
    )
  }
