import { useState } from 'react'
import { questions } from './questions'

type QuestionProps = {
  question: string
  answer: string
}

const QuestionsArr = ({ question, answer }: QuestionProps) => {
  const [hidden, toggleHidden] = useState(true)

  return (
    <article className="question">
      <header>
        <h2>{question}</h2>
      </header>
      <p className="answer">
        <span className={`${hidden ? 'hidden' : 'show'}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(!hidden)}>Show/Hide Answer</button>
      </footer>
    </article>
  )
}

const App = () => {
  return (
    <main>
      {questions.map((q) => (
        <QuestionsArr question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  )
}

export default App
