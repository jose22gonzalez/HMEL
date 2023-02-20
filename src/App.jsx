import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import Stove from './componets/Stove/Stove'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  // Caudal = volumen / tiempo



  return (
   <div>
      <input onChange={ (e) => setInput(e.target.value)}></input>
      <Stove/>
      <div>
        {input}
      </div>
   </div>
  )
}

export default App

//  <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
    // </div>
