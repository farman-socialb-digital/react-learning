function EmsNewTask() {
  return (
    <div className="p-6 py-10 bg-slate-800 rounded-xl shadow-xl">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-red-800 rounded-md px-2 py-1 text-xs font-bold">
          High
        </p>
        <p>11 Nov 2024</p>
      </div>
      <div className="text-xl font-bold mb-4">Create React App</div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex justify-between mt-6">
        <button className="bg-green-700 p-1 px-2 rounded-full text-slate-300 text-sm">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default EmsNewTask;
