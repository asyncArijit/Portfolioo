import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Pages/Home/Home'

function App() {
 
  return (
    <>
      <div style={{width:"100vw",minHeight:"100vh",padding: "50px 200px", boxSizing: "border-box"   } } >
        <Home/> 
      </div>
        
      
    </>
  )
}

export default App
