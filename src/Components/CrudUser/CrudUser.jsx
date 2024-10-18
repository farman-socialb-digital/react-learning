import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

function CrudUser() {
  let [data, setData] = useState([]);
  function getUserData() {
    axios
      .get("https://6712334a4eca2acdb5f7902f.mockapi.io/crud-user")
      .then((response) => {
        setData(response.data);
      });
  }
  useEffect(() => {
    getUserData();
  }, [data]);
  
  return (
    <>
      <div className="flex justify-end max-w-[550px] m-auto">
        <Link
          to="/crud-user/create-user"
          className="border border-gray-600 p-2 px-4 rounded-full text-gray-400 mb-4"
        >
          Create User
        </Link>
      </div>
      <div className="max-w-[550px] m-auto border border-gray-700 rounded-xl mb-8 overflow-hidden">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">Users List</p>
        <div className="m-4">
          <table className="w-full text-left rtl:text-right text-gray-500">
            <thead>
              <tr>
                <th className="py-1.5 px-3">ID</th>
                <th className="py-1.5 px-3">Full Name</th>
                <th className="py-1.5 px-3">Email</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((eachUserData, i) => {
                return (
                  <tr key={i}>
                    <td className="py-1.5 px-3">{eachUserData.id}</td>
                    <td className="py-1.5 px-3">{eachUserData.name}</td>
                    <td className="py-1.5 px-3">{eachUserData.email}</td>
                    <td className="flex justify-center gap-3 py-1.5 px-3">
                      <CiEdit className="text-green-300" />
                      <RiDeleteBin6Line className="text-red-600" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CrudUser;
