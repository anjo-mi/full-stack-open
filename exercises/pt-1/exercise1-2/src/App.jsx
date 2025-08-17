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
        <Part part={part} ex={props.exercises1}/>
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
      <p>Total exercises: {props.exercises1 + props.exercises3 + props.exercises2}</p>
    </>
  )
}


function App() {
  
  const course = 'Short Stacks AppDev';
  const parts = ['React Fundies', 'Using props to pass the data', 'State of a component'];
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <>
      <Header course={course}/>
      <Content parts={parts} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>
  )
}

export default App
