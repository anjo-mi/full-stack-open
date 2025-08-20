import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const DisplayLink = ({src, cls, href, alt}) =>{
  return (
    <a href={href} target="_blank">
      <img src={src} className={cls} alt={alt} />
    </a>
  )
}
const DisplayCounter = ({counter}) => <div>{counter}</div>;

const DisplayButton = ({fn, txt}) => <button onClick={fn}>{txt}</button>;

function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    console.log(`counting from ${counter}!`);
    setCounter(counter + 1);
  }
  const startOver = () => {
    console.log(`resetting from ${counter}!`);
    setCounter(0);
  }
  const minusOne = () => {
    console.log(`subtracting from ${counter}!`);
    setCounter(counter-1);
  }
  return (
    <>
      <DisplayLink src={viteLogo} cls="logo" alt="Vite Logo" href="https://vite.dev"/>
      <DisplayLink src={reactLogo} cls="logo react" alt="React Logo" href="https://react.dev"/>
      <DisplayCounter counter={counter} />
      <DisplayButton fn={addOne} txt="Count!!!" />
      <DisplayButton fn={minusOne} txt="Deduct!!!" />
      <DisplayButton fn={startOver} txt="Revert to Zero!!!" />      
    </>
  )
}

export default App
