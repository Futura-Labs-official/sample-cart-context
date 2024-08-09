import React, { useState } from 'react';
import { useTodo } from '../Hooks/Hooks';
import toast from 'react-hot-toast';
import { v4 as createUID } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Todo = () => {

    // formik

    // const [todo, setTodo] = useState({
    //     title: "", description: ""
    // })
    const { todoList, setTodoList } = useTodo()
    
    const todo = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        onSubmit: (values) => {
            if (!values.title || !values.description) return toast.error("Task and description field are required")
            if (todoList.some(item => item.task.title.toLowerCase() == values.title.toLowerCase()))
                return toast.error("Task already exist")
            const taskObject = {
                id: createUID(),
                task: values,
                status: "pending",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
            setTodoList([taskObject, ...todoList])
            todo.resetForm()
        },
        validate: (values) => {
            const error = {}
            if (values.title.length < 10) {
                error.title = "Title: min: 10"
                return error
            }
            if (values.title.length > 18) {
                error.title = "Title: max: 18"
                return error
            }
        }
    })

    const navigate = useNavigate()

    return (
        <div className='w-screen text-white h-screen px-2 md:px-10 flex-col items-center flex pt-10 pb-2'>
            <div className='w-full md:w-[500px]'>
                <form className='flex flex-col gap-2' onSubmit={todo.handleSubmit}>
                    <input className='text-black p-2.5 outline-none' type='text' value={todo.values.title} name='title' onChange={todo.handleChange} placeholder='Title: Todo'/>
                    <p>{ todo.errors.title }</p>
                    <input className='text-black p-2.5 outline-none' type='text' value={todo.values.description} name='description' onChange={todo.handleChange} placeholder='Description: Todo' />
                    <button className='bg-purple-800 p-2.5 mt-3'>Add Todo</button>
                </form>
            </div>
            <div className='overflow-y-scroll h-[86vh]'>
                <p className='mt-5 text-center'>Pending List ({todoList.filter(item => item.status === "pending").length})</p>
                <div className='mt-3 w-full md:w-[500px] flex flex-col gap-3'>
                    {
                        todoList.filter(item => item.status === "pending").map(item => {
                            return (
                                <div key={item.id} className='flex justify-between bg-[#2d2d2d] p-5'>
                                    <div>
                                    <p>{ item.task.title.length > 15 ? item.task.title.slice(0,15) + "..." : item.task.title}</p>
                                    <p>{ item.task.description.length > 25 ? item.task.description.slice(0,25) + "..." : item.task.description}</p>
                                    </div>
                                    <div>
                                        <i className='fa fa-eye cursor-pointer' onClick={() => navigate(`/todo/v/${item.id}`)}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className='mt-5 text-center'>Completed List ({todoList.filter(item => item.status === "completed").length})</p>
                <div className='mt-3 w-full md:w-[500px] flex flex-col gap-3'>
                    {
                        todoList.filter(item => item.status === "completed").map(item => {
                            return (
                                <div key={item.id} className='flex justify-between bg-[#2d2d2d] p-5'>
                                    <div>
                                        <p>{ item.task.title.length > 15 ? item.task.title.slice(0,15) + "..." : item.task.title}</p>
                                        <p>{ item.task.description.length > 25 ? item.task.description.slice(0,25) + "..." : item.task.description}</p>
                                    </div>
                                    <div>
                                        <i className='fa fa-eye cursor-pointer' onClick={() => navigate(`/todo/v/${item.id}`)}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Todo;
