import React from "react";

function Card(props) {
  return (
    <div className="max-w-[550px] m-auto bg-slate-800 rounded-xl p-5 pt-4 mb-8">
      <p className="mb-3 font-bold text-xl text-slate-400">{props.title}</p>
      <input
        type="text"
        className="rounded-full p-3 w-full bg-slate-900 outline-none text-center text-slate-600"
        value={props.name}
        onChange={(e)=> props.setName(e.target.value)}
      />
      <p className="mt-3 text-sm text-slate-400">{props.name}</p>
    </div>
  );
}

export default Card;
