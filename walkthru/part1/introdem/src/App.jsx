import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


const DisplayLink = ({src, cls, href, alt}) =>{
  return (
    <a href={href} target="_blank">
      <img src={src} className={cls} alt={alt} />
    </a>
  )
}

const DisplayCounter = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}
const DisplayButton = ({fn, txt}) => {
  return (
    <button onClick={fn}>{txt}</button>
  )
}

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log(`counting from ${counter}!`);
    setCounter(counter + 1);
  }
  const startOver = () => {
    console.log(`resetting from ${counter}!`);
    setCounter(0);
  }
  return (
    <>
      <DisplayLink src={viteLogo} cls="logo" alt="Vite Logo" href="https://vite.dev"/>
      <DisplayLink src={reactLogo} cls="logo react" alt="React Logo" href="https://react.dev"/>
      <DisplayCounter counter={counter} />
      <DisplayButton fn={handleClick} txt="Count!!!" />
      <DisplayButton fn={startOver} txt="Revert to Zero!!!" />
      
      
    </>
  )
}

export default App
