import React from 'react'

export default function Questions(props) {

  // helper function to mix up the right and wrong answers
//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

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


// return one question card for each item in the array
  return (
    props.questionsArray.map(question => {
      
      return (
        <div className="Question" key={question.id}>
          <p>{question.question}</p>
          <div className="answers" id={question.id}>
            {question.answers.map(answer => {
              return <button 
                        id={answer.id}
                        key={answer.id}
                        style={answer.selected ? selectedStyle : clearStyle}
                        onClick={handleClick}
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
