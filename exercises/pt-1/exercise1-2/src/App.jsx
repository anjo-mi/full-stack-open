import { useState } from 'react'


const Header = (props) => {
  return (
    <>
      <p>{props.course}</p>
    </>
  )
}
const Content = (props) => {
  const callParts = (parts) => {
    return parts.map((part,i) => (
      <Part part={part.name} ex={part.exercises}/>
    ))
  }

  return (
    <>
      {callParts(props.parts)}    
      
    </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>{props.part}: {props.ex}</p>
    </>
  )
}
const Total = (props) => {
  return (
    <>
      <span>Total Exercises: </span>
      {props.parts.reduce((a,el) => a + el.exercises, 0)}
    </>
  )
}


function App() {
  
  const course = 'Short Stacks AppDev';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [part1,part2,part3];

  return (
    <>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </>
  )
}

export default App
