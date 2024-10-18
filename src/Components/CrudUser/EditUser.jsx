import React from "react";
import { Link } from "react-router-dom";

function EditUser() {
  return (
    <div className="max-w-[550px] m-auto border border-gray-700 rounded-xl mb-8 overflow-hidden">
      <p className="font-medium py-3 text-gray-300 bg-gray-800">Edit User</p>
      <form action="#" className="m-6  space-y-6">
        <input
          type="text"
          className="rounded-full p-3 w-full bg-gray-800 outline-none text-center text-gray-600"
          placeholder="Full Name"
        />
        <input
          type="email"
          className="rounded-full p-3 w-full bg-gray-800 outline-none text-center text-gray-600"
          placeholder="Email"
        />
        <div className="flex justify-center gap-3 items-center">
          <button className="bg-green-700 p-2 px-4 rounded-full">Save</button>
          <Link
            to="../"
            className="border border-gray-600 p-2 px-4 rounded-full text-gray-400"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
export default EditUser;
