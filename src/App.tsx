import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

//1. 



export default App
