import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Greetings, {props.name}, your {props.age} year old ass is old af!!</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const name = 'poop'
  const age = 45
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Salutations!</h1>
      <Hello name='Stevie' age={34}/>
      <Hello name='Toddie' age={22}/>
      <Hello name={name} age={age}/>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>  */}
      
    </>
  )
}

export default App
