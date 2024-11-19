function EmsFailedTask(props) {
  return (
    <div className="p-6 py-10 bg-slate-800 rounded-xl shadow-xl">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-red-800 rounded-md px-2 py-1 text-xs font-bold">
          {props.loggedInUserData.category}
        </p>
        <p>{props.loggedInUserData.date}</p>
      </div>
      <div className="text-xl font-bold mb-4">{props.loggedInUserData.title}</div>
      <p>
        {props.loggedInUserData.description}
      </p>
      <div className="flex justify-between mt-6">
        <button className="bg-red-700 p-1 px-2 rounded-full text-slate-300 text-sm">
          Failed
        </button>
      </div>
    </div>
  )
}

export default EmsFailedTask