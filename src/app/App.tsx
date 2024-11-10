import React from 'react'
import './App.scss'
import Palette from '../components/palette/Palette'
import Fields from '../components/fields/Fields'

const App = () => {
  return (
    <div className='app'>
      <Palette />
      <Fields />
    </div>
  )
}

export default App