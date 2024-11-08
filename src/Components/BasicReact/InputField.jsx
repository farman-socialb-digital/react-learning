import React from "react";

function InputField({ inputText, inputTextUpdate }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 pt-3 mb-8">
      <p className="mb-3 font-bold text-xl text-slate-400">{inputText}</p>
      <input
        type="text"
        className="rounded-full p-3 w-full bg-slate-900 outline-none text-center text-slate-600"
        value={inputText}
        onChange={inputTextUpdate}
      />
    </div>
  );
}

export default InputField;
