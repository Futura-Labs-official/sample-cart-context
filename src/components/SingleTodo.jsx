import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTodo } from '../Hooks/Hooks';

const SingleTodo = () => {

    const { listId } = useParams()
    const { todoList, setTodoList } = useTodo()
    const [todoData, setTodoData] = useState(todoList.find(item => item.id == listId))

    const markStatus = (status) => {
        const res = todoList.map(item => {
            if (item.id == listId) {
                return {
                    ...item,
                    status: status == 1 ? "completed" : "pending"
                }
            }
            return item
        })
        setTodoData({...todoData, status: status == 1 ? "completed" : "pending"})
        setTodoList(res)
    }

    return (
        <div className='w-screen mt-10 px-2 md:px-10 flex justify-center'>
            <div className='w-full md:w-[500px] bg-[#2d2d2d] p-3 text-white'>
                <p>ID: { todoData.id}</p>
                <p>Task: { todoData.task.title}</p>
                <p>Created At: { todoData.createdAt}</p>
                <p>Updated At: {todoData.updatedAt}</p>
                
                <p>Status: {todoData.status}</p>
                <div className='flex justify-end'>
                    {
                        todoData.status === "pending" ?
                            <button onClick={() => markStatus(1)}>Mark As Completed</button> :
                            <button onClick={() => markStatus(0)}>Mark As Pending</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default SingleTodo;
