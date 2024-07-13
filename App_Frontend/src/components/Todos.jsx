/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export function Todo() {
    const [todos , setTodos] = useState([]);

    
        useEffect(()=>{

            fetch("http://localhost:3000/todos")
              .then( async function(res){
                 const json = await res.json([]);
                 console.log(json)
                 setTodos(json.todos)
              })
            
        },[])
  
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as completed"}</button>
                </div>
            ))}
        </div>
    );
}
