function DarkLight(props) {
  return (
    <label className={`cursor-pointer flex justify-center items-center ${props.class}`}>
      <input type="checkbox" value="" className="sr-only peer"></input>
      <div className="relative w-7 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-0 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate-600 peer-checked:after:bg-slate-300 after:border-0 after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-slate-500"></div>
      <span className="mx-1 text-[0.6rem] font-medium text-slate-500">
        Dark / Light
      </span>
    </label>
  );
}

export default DarkLight;
