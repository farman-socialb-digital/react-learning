function CreateTask() {
  return (
    <div className="border border-slate-700 overflow-hidden rounded-xl mb-8 mx-5">
      <p className="font-medium py-3 text-slate-400 bg-slate-800">
        Create Task
      </p>
      <div className="m-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <input
              type="text"
              placeholder="Task Title"
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
            />
            <input
              type="text"
              placeholder="Assign to (Employee name)"
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
            <input
              type="text"
              placeholder="Category (Design, dev, etc)"
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
            <input
              type="date"
              className="rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              style={{ colorScheme: "dark" }}
            />
          </div>
          <div className="md:col-span-6">
            <textarea
              className="rounded-3xl p-3 px-5 w-full bg-slate-800 outline-none text-slate-400 mb-6"
              rows={10}
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-700 p-2 px-4 rounded-full text-slate-300 cursor-pointer flex">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
