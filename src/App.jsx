import React, { useState } from 'react';


const App = () => {
  const [todos , setTodos] = useState([])
  const [input ,setInput] = useState("")

  const addTodo  = () => {
    if(input.trim()){
      setTodos([...todos , {id: Date.now() , text:input, completed:false}])
      setInput("")
    }
   
  }


  
  return (
    <div className='bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex justify-center items-center'>
      <div className='bg-white shadow-lg rounded-3xl p-20' >
        <h1 className='font-bold text-3xl text-center mb-6 '>React Todo List </h1>

        <div className='mb-4 flex '>
          <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Add a new todo' className='flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600' /> 
          <button onClick={addTodo} className='bg-blue-500 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700'>Add</button>
        </div>

        <ul className='space-y-2'>
          {
            todos.map(todo => (
              <li key={todo.id} className='flex justify-between items-center px-4 py-2 border rounded-lg bg-slate-100 border border-slate-200'>
                <input type='checkbox' checked={todo.completed}
                onChange={()=> setTodos(
                 todos.map((t)=> (
                  t.id === todo.id ? {...t , completed: !t.completed} :t
                 ))
                )}
                className= 'mr-2 h-5 w-5 text-blue-600'
                />
                <span className={`flex-grow ${todo.completed ? "line-through text-grey-500" : "text-grey-800"}`}>{todo.text}</span>
               

               <button className='ml-2 border-none rounded-lg bg-red-500 p-2 text-white hover:bg-gred-600' onClick={()=> setTodos(todos.filter((t) => t.id !== todo.id))}>Delete</button>

                
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default App;