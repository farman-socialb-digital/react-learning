import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EditUser() {
  let [id, setId] = useState(0);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  let navigate = useNavigate()

  let clickUpdateUser = (e) => {
    e.preventDefault()
    axios.put(`https://6712334a4eca2acdb5f7902f.mockapi.io/crud-user/${id}`, {
      name: name,
      email: email,
    })
    .then(()=>{
      navigate("/crud-user")
    })
  };

  return (
    <div className="max-w-[550px] m-auto border border-gray-700 rounded-xl mb-8 overflow-hidden">
      <p className="font-medium py-3 text-gray-300 bg-gray-800">Edit User</p>
      <form action="#" className="m-6  space-y-6">
        <input
          type="text"
          className="rounded-full p-3 w-full bg-gray-800 outline-none text-center text-gray-400"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="rounded-full p-3 w-full bg-gray-800 outline-none text-center text-gray-400"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-center gap-3 items-center">
          <button
            className="bg-green-700 p-2 px-4 rounded-full"
            onClick={clickUpdateUser}
          >
            Save
          </button>
          <Link
            to="/crud-user"
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
