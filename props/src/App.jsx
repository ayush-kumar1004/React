import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Ayush Kumar' age={18} img ='https://images.unsplash.com/photo-1780174604929-42437e465a44?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Prakarsh Agarwal' age={21} img ='https://plus.unsplash.com/premium_photo-1783111268971-2b336edeef89?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='HanumanJi' age={100} img='https://plus.unsplash.com/premium_photo-1783394326767-5104b53dba6e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
