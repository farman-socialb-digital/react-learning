import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import loader from "/svg/loader.svg";
import axios from "axios";

function CrudUser() {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  function getUserData() {
    setIsLoading(true);
    axios
      .get("https://6712334a4eca2acdb5f7902f.mockapi.io/crud-user")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  }

  let hanleDelete = (id) => {
    axios
      .delete(`https://6712334a4eca2acdb5f7902f.mockapi.io/crud-user/${id}`)
      .then(() => {
        getUserData();
      });
  };

  let editHandle = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="flex justify-end max-w-[550px] m-auto">
        <Link
          to="/crud-user/create-user"
          className="border border-slate-600 p-2 px-4 rounded-full text-slate-400 mb-4"
        >
          Create User
        </Link>
      </div>
      <div className="max-w-[550px] m-auto border border-slate-700 rounded-xl mb-8 overflow-hidden">
        <p className="font-medium py-3 text-slate-400 bg-slate-800">Users List</p>
        <div className="m-4">
          <table className="w-full text-left rtl:text-right text-slate-500">
            <thead>
              <tr>
                <th className="py-1.5 px-3">ID</th>
                <th className="py-1.5 px-3">Full Name</th>
                <th className="py-1.5 px-3">Email</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="text-center">
                    <img className="inline-block" src={loader} height={34} width={34} />
                  </td>
                </tr>
              ) : (
                data.map((eachUserData, i) => {
                  return (
                    <tr key={i}>
                      <td className="py-1.5 px-3">{eachUserData.id}</td>
                      <td className="py-1.5 px-3">{eachUserData.name}</td>
                      <td className="py-1.5 px-3">{eachUserData.email}</td>
                      <td className="flex justify-center gap-3 py-1.5 px-3">
                        <Link to="/crud-user/edit-user">
                          <button
                            onClick={() =>
                              editHandle(
                                eachUserData.id,
                                eachUserData.name,
                                eachUserData.email
                              )
                            }
                          >
                            <CiEdit className="text-green-300" />
                          </button>
                        </Link>
                        <button onClick={() => hanleDelete(eachUserData.id)}>
                          <RiDeleteBin6Line className="text-red-600" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CrudUser;
