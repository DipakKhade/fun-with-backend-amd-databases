import { useEffect, useState } from "react"



const AllTodos = () => {
    const [data, setdata] = useState([])

useEffect(() => {
    async function getTodos(){
        const res =await fetch('http://localhost:3001/todos') 
        const alltodos=await res.json()
      
        setdata(alltodos)
    }
    getTodos()
}, [])

// console.log(data)

  return (
    <main>
<h3 className="font-bold p-4">All Todos</h3>
    <div className="flex flex-wrap">


      {data.map(function (todo, index) {
        return (
          <div key={index} className="max-w-md mx-auto bg-white shadow-md rounded p-3 mb-4">
            <h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
            <p className="text-gray-700 text-base mb-4">{todo.description}</p>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                className="mr-2 leading-tight"
                id={`completed-${index}`}
                readOnly
              />
              <label
                htmlFor={`completed-${index}`}
                className={todo.isCompleted ? "text-green-500" : "text-red-500"}
              >
                {todo.isCompleted ? "Completed" : "Incomplete"}
              </label>
            </div>
          </div>
        );
      })}
    </div>
    </main>
  )
}

export default AllTodos
