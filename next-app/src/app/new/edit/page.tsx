"use client"
import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
type EditTodo = {
    id: string,
    title: string,
    complete: boolean
}

function Page() {

  const {register, handleSubmit} = useForm<EditTodo>()

  const onSubmit: SubmitHandler<EditTodo> = async (data) => {
    const inputs = await fetch('http://localhost:3000/api/todos',{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }) 
    const res = await inputs.json()
    console.log(res)
  }

  return (
    <div className='w-[100] h-screen bg-slate-500 flex items-center justify-center box-border pt-12 pb-12'>
    <div className='border border-black w-4/12 p-8 flex items-center justify-center rounded-lg'>
    <form action="" className='flex flex-col bg-gray-700 p-12 gap-4 w-min-fit rounded-lg' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='id' className='text-lg text-sky-500'>Enter ID</label>
        <input type="number" id='id' className=' p-4 rounded-lg' {...register('id')}/>
        <label htmlFor='title' className='text-lg text-sky-500'>Enter Title</label>
        <input type="text" id='title' className='p-4 rounded-lg' {...register('title')}/>
        <label htmlFor='completed' className='text-lg text-sky-500'>Enter Status</label>
        <input type="text" id='complete' className='p-4 rounded-lg' {...register('complete')}/>
        <button className='bg-sky-500 mt-4 p-2 rounded-lg'>Submit</button>
    </form>
    </div>
   </div>
  )
}

export default Page