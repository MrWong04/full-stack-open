// 01-exercise
import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [voteList, setVoteList] = useState(new Array(anecdotes.length).fill(0))
  const randomSelect = () => {
    const random = Math.floor(Math.random()*7)
    setSelected(random)
    console.log(voteList)
  }
  const vote = () => {
    const array = [...voteList]
    array[selected] += 1
    setVoteList(array)
  }
  
  const mostVotesAnecdote = voteList.reduce((pre,now,index) => {
    console.log(now,pre)
    return now>pre?index:pre
  })
  console.log(mostVotesAnecdote)
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>
        has {voteList[selected]} votes
      </p>
      <div>
        <button onClick={vote}>vote</button>
        <button onClick={randomSelect}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>

      </p>
    </div>
  )
}


export default App;
