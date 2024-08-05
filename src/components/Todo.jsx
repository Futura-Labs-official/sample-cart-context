import React, { useState } from 'react';
import { useTodo } from '../Hooks/Hooks';
import toast from 'react-hot-toast';
import { v4 as createUID } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Todo = () => {

    const [todo, setTodo] = useState("")
    const { todoList, setTodoList } = useTodo()
    
    const navigate = useNavigate()

    const handleAddTodo = () => {
        if (!todo) return toast.error("Task field is required")
        if (todoList.some(item => item.task.toLowerCase() == todo.toLowerCase()))
            return toast.error("Task already exist")
        const taskObject = {
            id: createUID(),
            task: todo,
            status: "pending",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
    }

    return (
        <div className='w-screen text-white h-screen px-2 md:px-10 flex-col items-center flex pt-10 pb-2'>
            <div className='flex flex-col w-full md:w-[500px] h-[16vh]'>
                <input className='text-black p-2.5 outline-none' type='text' value={todo} onChange={({ target }) => setTodo(target.value)}/>
                <button onClick={handleAddTodo} className='bg-purple-800 p-2.5 mt-3'>Add Todo</button>
            </div>
            <div className='overflow-y-scroll h-[86vh]'>
                <p className='mt-5 text-center'>Pending List ({todoList.filter(item => item.status === "pending").length})</p>
                <div className='mt-3 w-full md:w-[500px] flex flex-col gap-3'>
                    {
                        todoList.filter(item => item.status === "pending").map(item => {
                            return (
                                <div key={item.id} className='flex justify-between bg-[#2d2d2d] p-5'>
                                    <div>
                                        <p>{ item.task.length > 15 ? item.task.slice(0,15) + "..." : item.task}</p>
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
                                        <p>{ item.task.length > 15 ? item.task.slice(0,15) + "..." : item.task}</p>
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
