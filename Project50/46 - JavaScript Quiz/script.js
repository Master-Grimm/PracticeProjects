const quiz = document.getElementById('quiz')
const answerElems = document.querySelectorAll('.answer')
const questionElem = document.getElementById('question')
const ALabel = document.getElementById('a-label')
const BLabel = document.getElementById('b-label')
const CLabel = document.getElementById('c-label')
const DLabel = document.getElementById('d-label')
const submitBtn = document.getElementById('submit')

let currentQuestion = 0
let score = 0

const questionsData = [
  {
    question: 'A Function Associated With An object is Called:',
    a: 'Function',
    b: 'Method',
    c: 'Link',
    d: 'NaN',
    correct: 'b',
  },
  {
    question: 'If Button is clicked .......Event Handler is invoked',
    a: 'OnSubmit()',
    b: 'OnLoad()',
    c: 'IsPostBack()',
    d: 'Onclick()',
    correct: 'd',
  },
  {
    question: 'Function is Used To Parse a String To Int:',
    a: 'ParseInt',
    b: 'Int.Parse',
    c: 'Parse.Int',
    d: 'Integer.Parse',
    correct: 'b',
  },
  {
    question: 'IsNaN() Evaluates And Argument To Determine if Given Value:',
    a: 'Is Not a Null',
    b: 'Is Not a Number',
    c: 'Is Not a New Object',
    d: 'None Of The Above',
    correct: 'b',
  },
  {
    question: 'GetMonth() returns The Month as:',
    a: 'Int',
    b: 'Float',
    c: 'Char',
    d: 'String',
    correct: 'a',
  },
]

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentquestionsData = questionsData[currentQuestion]

  questionElem.innerText = currentquestionsData.question
  ALabel.innerText = currentquestionsData.a
  BLabel.innerText = currentquestionsData.b
  CLabel.innerText = currentquestionsData.c
  DLabel.innerText = currentquestionsData.d
}

function deselectAnswers() {
  answerElems.forEach((answerEl) => (answerEl.checked = false))
}

function getAnswer() {
  let answer

  answerElems.forEach((answerElem) => {
    if (answerElem.checked) {
      answer = answerElem.id
    }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getAnswer()

  if (answer) {
    if (answer === questionsData[currentQuestion].correct) {
      score++
    }

    currentQuestion++

    if (currentQuestion < questionsData.length) {
      loadQuiz()
    } else if (score === 5) {
      quiz.innerHTML = `
      <h2>Congratulations!</h2>
      <h2>You answered ${score}/${questionsData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button>
  `
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${questionsData.length} questions correctly</h2>
      <button onclick="location.reload()">Try Again</button>
  `
    }
  }
  submitBtn.blur()
})
