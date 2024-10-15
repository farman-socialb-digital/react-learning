import React from "react";

function InputField({ inputText, inputTextUpdate }) {
  return (
    <div className="bg-gray-800 rounded-xl p-5 pt-3 mb-8">
      <p className="mb-3 font-bold text-xl text-gray-400">{inputText}</p>
      <input
        type="text"
        className="rounded-full p-3 w-full bg-gray-900 outline-none text-center text-gray-600"
        value={inputText}
        onChange={inputTextUpdate}
      />
    </div>
  );
}

export default InputField;
