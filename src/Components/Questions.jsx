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
  console.log(`Question: ${e.target.parentNode.id}, 'Answer: ${e.target.id}`)
}

const clearStyle = {
  backgroundColor: 'transparent'
}

const selectedStyle = {
  backgroundColor: '#D6DBF5'
}


if (props.questionsArray.length > 0) {
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
}