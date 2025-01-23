import { useState } from 'react'

const Title = props => <h1>{props.text}</h1>
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const Review = (props) => {
  return(
    <>
    <p>{props.text} {props.value}</p>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => setGood(good + 1)
  const neutralReview = () => setNeutral(neutral + 1)
  const badReview = () => setBad(bad + 1)

  return (
    <div>
      <Title text="give feedback"></Title>
      <Button handleClick={goodReview} text="good"></Button>
      <Button handleClick={neutralReview} text="neutral"></Button>
      <Button handleClick={badReview} text="bad"></Button>
      <Title text="statistics"></Title>
      <Review text="good" value={good}></Review>
      <Review text="neutral" value={neutral}></Review>
      <Review text="bad" value={bad}></Review>
    </div>
  )
}

export default App