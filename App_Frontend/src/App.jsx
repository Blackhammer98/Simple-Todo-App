/* eslint-disable no-unused-vars */

import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todo } from './components/Todos'
import { useState } from 'react'

function App() {
  
  


  // fetch("http://localhost:3000/todos")

  // .then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })
  return (
    <>
      <div>
       <CreateTodo></CreateTodo>
       <Todo></Todo>
      </div>
     
    </>
  )
}

export default App
