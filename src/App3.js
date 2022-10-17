// 01-exercise
import { useState } from 'react'

const Button = ({text,handleClick}) => (
  <>
    <button onClick={handleClick}>{text}</button>
  </>
)

const StatisticLine  = ({text,value}) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
  
  
)

const Statistics = ({datas}) => {
  const {good,neutral,bad,all,average,positive} = datas
  const hasData = good||neutral||bad
  if (hasData){
    return (
      <table>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
      </table>
      
    )
  }return (
    <>
      <h4>No feedback given</h4>
    </>
  )
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const all = good + bad + neutral
  const average = (good - bad) / all || 0
  const positive = `${isNaN((good/all).toFixed(2) * 100 ) ? 0 : (good/all).toFixed(2) * 100}% `
  const handleClickButton = (property) => () =>{
    if (property === "good"){
      setGood(good + 1)
    }else if(property === 'neutral'){
      setNeutral(neutral + 1)
    }else{
      setBad(bad + 1)
    }
  } 
  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" handleClick={handleClickButton("good")}/>
      <Button text="neutral" handleClick={handleClickButton("neutral")}/>
      <Button text="bad" handleClick={handleClickButton("bad")}/>
      <h2>statistics</h2>
      <Statistics datas = {{good,neutral,bad,all,average,positive}}></Statistics>
    </div>
  )
}

export default App;
