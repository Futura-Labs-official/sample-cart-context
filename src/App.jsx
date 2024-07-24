import { useState } from "react"
import Form from "./components/Form"
import { useRestraurent } from "./Hooks/Hooks"
import toast from "react-hot-toast"

const App = () => {

    const [formOpen, setFormOpen] = useState(false)
    const { restaurent, setRestaurent } = useRestraurent()
    const [formType, setType] = useState("")
    const [updateItem, setUpdateItem] = useState(null)

    const handleRemove = (removeId) => {
        const res = restaurent.filter(item => item.id != removeId)
        setRestaurent(res)
        return toast.success("Removed")
    }

    return (
        <div className="pt-10">
            <div onClick={() => {
                setFormOpen(true)
                setType("create")
            }} className="fixed right-5 bottom-5 w-10 h-10 cursor-pointer bg-purple-700 rounded-full flex justify-center items-center text-white">
                <i className="fa fa-plus text-xl"/>
            </div>
            {formOpen && formType && <Form data={updateItem} setUpdateItem={setUpdateItem} type={formType} setFormOpen={setFormOpen} />}
            <div className="flex justify-center gap-3">
                {
                    restaurent.map(item => {
                        return (
                            <div key={item.id} className="w-60 p-2 border-2 border-gray-600">
                                <div>
                                    <img alt={item.name} src={item.image} className="aspect-square object-cover"/>
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.phone}</p>
                                    <p>{item.location}</p>
                                    <div className="flex gap-2 w-full mt-4">
                                        <button onClick={() => handleRemove(item.id)} className="w-full bg-red-600 text-white p-1"><i className="fa fa-trash"/> Remove</button>
                                        <button className="w-full bg-blue-600 text-white p-1" onClick={() => {
                                            setFormOpen(true)
                                            setType("update")
                                            setUpdateItem(item)
                                        }}><i className="fa fa-pen"/> Update</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App