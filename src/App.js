
import './App.css';
import React from 'react'

export default function App() {
  const [varia, setVaria] = useState("Hello world")
  return (
    <div>
      <h1>{varia}</h1>
    </div>
  )
}

