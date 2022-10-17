// 01-d
import { useState } from 'react'

const History = ({allclicks}) => {
  if(allclicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press History: {allclicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <>
    <span>{text}</span>
    <button onClick = {handleClick}>
      {text}
    </button>
  </>

)

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allclicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allclicks.concat('L'))
    setClicks({...clicks,left: clicks.left + 1})
  }
    

  const handleRightClick = () => {
    setAll(allclicks.concat('R'))
    setClicks({...clicks,right: clicks.right + 1})
  }
  console.log(allclicks)
  return (
    <div>
      <Button text="left" handleClick={handleLeftClick} />
      <Button text="right" handleClick={handleRightClick} />
      <History allclicks={allclicks}></History>
    </div>
  )
}

export default App;
