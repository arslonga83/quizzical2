// QUESTION do the answers need to be objects before i display them? could have props like id, key, selected, correct...


import React from 'react'
import {decode} from 'html-entities' //decodes html entities in api data
import { nanoid } from 'nanoid'

export default function Questions(props) {

  // helper function to mix up the right and wrong answers
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function select(event) {
  console.log(event.target.id)
}


if (props.questionsData.length > 0) {
  return (
    props.questionsData.map((question, index) => {
      
      // put all answers in one array and shuffle them
      let answers = []
      question.incorrect_answers.map(answer => answers.push(decode(answer)))
      answers.push(decode(question.correct_answer))
      shuffleArray(answers)

      return (
        <div className="Question" key={index}>
          <p>{decode(question.question)}</p>
          <div className="answers">
            {answers.map(answer => {
              return <button id={nanoid()} key={nanoid()} onClick={select}>{answer}</button>
            })}
          </div>
        </div>
      )

    })
    )
  }
}