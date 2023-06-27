"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type AddTodo = {
  userId: string,
  id: string,
  title: string,
  completed: boolean
}

function AddTodo() {

  const {register, handleSubmit} = useForm<AddTodo>()

  const onSubmit: SubmitHandler<AddTodo>  = async (data) => {
    console.log(data)
    const inputs = await fetch('http://localhost:3000/api/todos',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    const res = await inputs.json()
    console.log(res)
  }

  return (
  <div className='w-[100] h-screen bg-slate-500 flex items-center justify-center'>
    <div className='bg-slate-500 sm:bg-gray-900 w-6/12 p-6 flex items-center justify-center rounded-lg'>
    <form action="" className='flex flex-col p-8 bg-gray-700 gap-2 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userId" className='text-lg text-sky-500'>Enter userID</label>
        <input type="number" id='userId'  className='p-4 rounded' required {...register('userId')}/>
        <label htmlFor='id' className='text-lg text-sky-500'>Enter ID</label>
        <input type="number" id='id' className='p-4 rounded' required {...register('id')}/>
        <label htmlFor='title' className='text-lg text-sky-500'>Enter Title</label>
        <input type="text" id='title' className='p-4 rounded' required {...register('title')}/>
        <label htmlFor='completed' className='text-lg text-sky-500'>Enter Status</label>
        <input type="text" id='complete' className='p-4 rounded' required {...register('completed')}/>
        <button className='bg-sky-500 p-4 rounded-lg mt-4'>Add</button>
    </form>
    </div>
   </div>
  )
}

export default AddTodo