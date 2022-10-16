import { useState } from 'react'

const Hello = ({name,age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}
const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const name = 'Peter'
  const age = 10

  const increaseByOne = () => {
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
  }
  const setToZero = () => {
    setCounter(0)
  }
  console.log('rendering...', counter)
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter}></Display>
      <Button 
        text='plus'
        onClick={increaseByOne}
      />
      <Button 
        onClick={decreaseByOne}
        text='minus'
      />
      <Button 
        onClick={setToZero}
        text='zero'
      />
    </div>
  )
}
export default App;
