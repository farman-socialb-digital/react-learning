import { useState } from "react"

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskAssignTo, setTaskAssignTo] = useState("")
  const [taskCategory, setTaskCategory] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const taskSubmit = (e) => {
    e.preventDefault()
    console.log(taskTitle)
    console.log(taskAssignTo)
    console.log(taskCategory)
    console.log(taskDate)
    console.log(taskDescription)
    setTaskTitle("")
    setTaskAssignTo("")
    setTaskCategory("")
    setTaskDate("")
    setTaskDescription("")
  }
  return (
    <div className="border border-slate-700 overflow-hidden rounded-xl mb-12">
      <p className="font-medium py-3 text-slate-400 bg-slate-800">
        Create Task
      </p>
      <form className="m-8 block" onSubmit={(e)=>{ taskSubmit(e) }}>
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
            />
            <input
              type="text"
              placeholder="Assign to (Employee name)"
              value={taskAssignTo}
              onChange={(e)=>{
                setTaskAssignTo(e.target.value)
              }}
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
            <input
              type="text"
              placeholder="Category (Design, dev, etc)"
              value={taskCategory}
              onChange={(e)=>{
                setTaskCategory(e.target.value)
              }}
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
            <input
              type="date"
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
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
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
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
