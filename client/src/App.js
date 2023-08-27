import React from 'react'
import "./App.css"
import Canvas from './components/Canvas'
import Chat from './components/Chat'

const App = () => {
  return (
    <div className='container'>
      <Canvas/>
      <Chat/>
    </div>
  )
}

export default App
