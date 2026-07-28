import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div>
      <div className="Card">
        <h1>Ayush Kumar</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut consequatur pariatur dicta incidunt sint? Tempore.</p>
      </div>
      <Card user = 'Ayush' age = '18' />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App
