import { useState } from 'react'


const Header = (props) => {
  return (
    <>
      <p>{props.course.name}</p>
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
      {callParts(props.course.parts)}    
      
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
      {props.course.parts.reduce((a,el) => a + el.exercises, 0)}
    </>
  )
}


function App() {
  
  const course = {
    name: 'Short Stacks AppDev',
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
    <>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course}/>
    </>
  )
}

export default App
