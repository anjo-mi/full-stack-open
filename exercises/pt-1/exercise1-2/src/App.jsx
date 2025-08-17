import { useState } from 'react'


const Header = (props) => {
  return (
    <>
      <p>{props.course}</p>
    </>
  )
}
const Content = (props) => {
  
  return (
    <>
      {props.parts.map((part,i) => (
        <Part part={part} ex={props.exercises[i]}/>
      ))}    
      {/* <Part part={props.parts[0]} ex={props.exercises1}/>
      <Part part={props.parts[1]} ex={props.exercises2}/>
      <Part part={props.parts[2]} ex={props.exercises3}/> */}
    </>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part}: {props.ex}</p>
    </>
  )
}
const Total = (props) => {
  return (
    <>
      <p>Total exercises: {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </>
  )
}


function App() {
  
  const course = 'Short Stacks AppDev';
  const parts = ['React Fundies', 'Using props to pass the data', 'State of a component'];
  const exercises = [10, 7, 14];

  return (
    <>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </>
  )
}

export default App
