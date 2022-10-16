import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}
const Total = (props) => {
  const exercises = props.parts.map(item => item.exercises)
  const nums = exercises.reduce((pre,cur)=>pre+cur)
  return (
    <>
      <p>Number of exercises {nums}</p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <h2>part1 a</h2>
      <Header course={course.name}></Header>
      <Content 
        parts={course.parts}>
      </Content>
      <Total
        parts={course.parts}>
      </Total>
    </div>
  );
}

export default App;
