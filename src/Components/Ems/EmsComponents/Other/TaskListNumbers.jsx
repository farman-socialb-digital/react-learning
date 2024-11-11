function TaskListNumbers() {
  return (
    <div className="grid grid-cols-12 gap-8 px-5 text-3xl font-bold text-gray-300 text-left">
      <div className="md:col-span-3">
        <div className="p-6 bg-blue-800 rounded-xl shadow-xl">
          <h4>1</h4>
          <div className="text-xl">New Task</div>
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="p-6 bg-green-800 rounded-xl shadow-xl">
          <h4>3</h4>
          <div className="text-xl">Completed Task</div>
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="p-6 bg-yellow-800 rounded-xl shadow-xl">
          <h4>0</h4>
          <div className="text-xl">Accepted Task</div>
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="p-6 bg-red-800 rounded-xl shadow-xl">
          <h4>0</h4>
          <div className="text-xl">Failed Task</div>
        </div>
      </div>
    </div>
  );
}

export default TaskListNumbers;
