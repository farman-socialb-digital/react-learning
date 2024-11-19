function EmsHeader(props) {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    window.location.reload()
  }
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-slate-800">
      <div className="text-sm text-slate-300">
        Hi, {props.dashboardTitle} <span className="text-xl">👋🏻</span>
      </div>
      <div className="relative">
        <button onClick={handleLogout} className="bg-red-700 p-1 px-3 rounded-full text-slate-300 cursor-pointer flex text-sm">
          Logout
        </button>
      </div>
    </header>
  );
}

export default EmsHeader;
