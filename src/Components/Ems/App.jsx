import { useContext, useEffect, useState } from "react";
import EmsLogin from "./EmsComponents/EmsAuth/EmsLogin";
import EmsEmployeeDashboard from "./EmsComponents/EmsDashboard/EmsEmployeeDashboard";
import EmsAdminDashboard from "./EmsComponents/EmsDashboard/EmsAdminDashboard";
import {EmsAuthContext} from "./EmsContext/EmsAuthProvider";

function EmsMain() {
  let [emsUser, setEmsUser] = useState(null)
  let [loggedInUserData, setLoggedInUserData] = useState(null)
  let [invalidUser, setInvalidUser] = useState(true)
  const authData = useContext(EmsAuthContext)

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser")
  //   if(loggedInUser){
  //     setEmsUser(loggedInUser.role)
  //   }
  // }, [authData])
  

  const handleLogin = (email, password) => {
    if(email == "admin@example.com" && password == "123456"){
      setEmsUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}))
    } else if(authData){
      const employee = authData.emsEmployees.find((e)=>email == e.email && password == e.password)
      if(employee){
        setEmsUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee"}))
      } else{
        setInvalidUser("Please enter correct email and password")
      }
    }
    // else {}
  }

  return (
    <>
      {!emsUser ? <EmsLogin handleLogin={handleLogin} invalidUser={invalidUser} /> : ""}
      {emsUser == "admin" ? <EmsAdminDashboard dashboardTitle="Admin" /> : ""}
      {emsUser == "employee" ? <EmsEmployeeDashboard dashboardTitle="Employee" loggedInUserData={loggedInUserData} /> : ""}
    </>
  );
}

export default EmsMain;
