import Hooks from './components/Hooks'
import './App.css';
import React,{useState} from 'react'



function App() {

const [varia, setVaria] = useState("Hello world")
const [autrevaria, setAutrevaria] = useState("Hello city")
return (
  <div>
      <h1>{varia}</h1>
      <Hooks planet = {autrevaria}/>
    </div>
  )
}

export default App
