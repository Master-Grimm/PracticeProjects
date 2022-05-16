export type QuestionType = {
  id: number
  question: string
  answer: string
}

export const questions: QuestionType[] = [
  {
    id: 1,
    question: 'A Function Associated With An object is Called:',
    answer: 'Method',
  },
  {
    id: 2,
    question: 'If Button is clicked .......Event Handler is invoked',
    answer: 'Onclick()',
  },
  {
    id: 3,
    question: 'Function is Used To Parse a String To Int:',
    answer: 'Int.Parse',
  },
  {
    id: 4,
    question: 'IsNaN() Evaluates And Argument To Determine if Given Value:',
    answer: 'Is Not a Number',
  },
  {
    id: 5,
    question: 'GetMonth() returns The Month as:',
    answer: 'Int',
  },
]
