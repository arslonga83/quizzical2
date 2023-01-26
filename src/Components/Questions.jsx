import {decode} from 'html-entities' //decodes html entities in api data

export default function Questions(props) {

  // helper function to mix up the right and wrong answers
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
            <button>{answers[0]}</button>
            <button>{answers[1]}</button>
            <button>{answers[2]}</button>
            <button>{answers[3]}</button>
          </div>
        </div>
      )

    })
    )
  }
}