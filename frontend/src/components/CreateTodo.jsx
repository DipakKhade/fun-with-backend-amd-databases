import { useForm } from 'react-hook-form';

const CreateTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//  async function handleSubmit(data){
//   data.preventDefault(); 
//     // const res =await fetch('http://localhost:3001/settodo',{
//     //   method:"POST",
//     //   body:data
//     // }) 

//     console.log(data)
//  }
  return (
    <div className="p-24">
    <form onSubmit={handleSubmit(async(data) => 
   
    await fetch('http://localhost:3001/settodo',{
      method:"POST",
      body:JSON.stringify(
        {
        'title':data.title,
        'description':data.description
      }
      
      ),
      headers:{
'content-type':'application/json'
}
    })
    )}>
    {/* <form onSubmit={handleSubmit((data)=>console.log(data.title,data.description))}> */}
    <h2 className="text-2xl font-bold mb-4">Add Todo</h2>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        Title
      </label>
      <input 
      {...register('title')}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="Title"
        name="title"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Description
      </label>
      <textarea
      {...register('description')}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        placeholder="Description"
        name="description"
      />
    </div>
   
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Todo
      </button>
    </div>
    </form>
  </div>
  )
}

export default CreateTodo
