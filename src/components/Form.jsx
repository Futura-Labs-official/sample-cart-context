import React, { useState } from 'react';
import { useRestraurent } from '../Hooks/Hooks';
import { v4 as createId } from 'uuid';
import toast from 'react-hot-toast';

const Form = ({ data, type, setFormOpen, setUpdateItem }) => {

    const [formData, setFormData] = useState({
        name: data?.name ?? "",
        description: data?.description ?? "",
        phone: data?.phone ?? "",
        location: data?.location ?? "",
        image: data?.image ?? ""
    })
    const {restaurent, setRestaurent} = useRestraurent()

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const res = restaurent.map(item => {
            if (item.id == data.id) {
                return {...formData, id: data.id}
            }
            return item
        })
        setRestaurent(res)
        return toast.success("Updated")
    }

    const handleCreate = (e) => {
        e.preventDefault()
        formData.id = createId()
        setRestaurent([formData, ...restaurent])
        setFormData({
            name: "",
            description: "",
            phone: "",
            location: "",
            image: ""
        })
        setUpdateItem(null)
        return toast.success("Created")
    }

    return (
        <div className='w-screen flex justify-center h-screen top-0 px-2 fixed bg-black bg-opacity-75'>
            <div>
                <form onSubmit={type && type == "create" ? handleCreate : handleUpdate} className='flex flex-col w-full md:w-[500px] mt-20 rounded-lg gap-3 bg-gray-200 p-5'>
                    <input type="text" className='p-2 outline-none border-2 border-gray-600' placeholder='Name' name="name" value={formData.name} onChange={handleChange}/>
                    <input type="text" className='p-2 outline-none border-2 border-gray-600' placeholder='Description' name="description" value={formData.description} onChange={handleChange} />
                    <input type="text" className='p-2 outline-none border-2 border-gray-600' placeholder='Phone' name="phone" value={formData.phone} onChange={handleChange} />
                    <input type="text" className='p-2 outline-none border-2 border-gray-600' placeholder='Location' name="location" value={formData.location} onChange={handleChange} />
                    <input type="text" className='p-2 outline-none border-2 border-gray-600' placeholder='Image' name="image" value={formData.image} onChange={handleChange} />
                    <div className='flex gap-2 w-full'>
                        <button type='button' className='bg-red-700 text-white w-full p-2' onClick={() => {
                            setFormOpen(false)
                            setUpdateItem(null)
                        }}>Cancel</button>
                        <button type='submit' className='bg-green-700 text-white w-full p-2'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
