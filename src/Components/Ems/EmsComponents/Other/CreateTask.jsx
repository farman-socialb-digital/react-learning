import { useContext, useState } from "react"
import { EmsAuthContext } from "../../EmsContext/EmsAuthProvider";

function CreateTask() {
  const [userData, setUserData] = useContext(EmsAuthContext);

  const [title, setTitle] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [createdTask, setCreatedTask] = useState({})
  const taskSubmit = (e) => {
    e.preventDefault()

    setCreatedTask({ title, category, date, description, active: false, newTask: true, completed: false, failed: false })

    const data = userData;

    data.forEach(function (element){
      if(assignTo == element.fullName){
        element.tasks.push(createdTask)
        element.taskCounts.newTask = element.taskCounts.newTask+1
      }
    })
    setUserData(data)

    console.log(data)

    // setTitle("")
    // setAssignTo("")
    // setCategory("")
    // setDate("")
    // setDescription("")
    // setCreatedTask("")
  }
  return (
    <div className="border border-slate-700 overflow-hidden rounded-xl mb-12">
      <p className="font-medium py-3 text-slate-400 bg-slate-800">
        Create Task
      </p>
      <form className="m-8 block" onSubmit={taskSubmit}>
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
            />
            <input
              type="text"
              placeholder="Assign to (Employee name)"
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
            <input
              type="text"
              placeholder="Category (Design, dev, etc)"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
            <input
              type="date"
              value={date}
              onChange={(e)=>{
                setDate(e.target.value)
              }}
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
          </div>
          <div className="md:col-span-6">
            <textarea
              className="rounded-3xl p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              rows={10}
              placeholder="Description"
              value={description}
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-700 p-2 px-4 rounded-full text-slate-300 cursor-pointer flex">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
