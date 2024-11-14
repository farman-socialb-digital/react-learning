import { useContext, useEffect, useState } from "react";
import EmsLogin from "./EmsComponents/EmsAuth/EmsLogin";
import EmsEmployeeDashboard from "./EmsComponents/EmsDashboard/EmsEmployeeDashboard";
import EmsAdminDashboard from "./EmsComponents/EmsDashboard/EmsAdminDashboard";
import {EmsAuthContext} from "./EmsContext/EmsAuthProvider";

function EmsMain() {
  useEffect(() => {
    document.getElementById("nav").classList.add("hidden");
    document.getElementById("langRtl").classList.add("hidden");
    document.getElementById("root").classList.remove("pb-16");
    return () => {
      document.getElementById("nav").classList.remove("hidden");
      document.getElementById("langRtl").classList.remove("hidden");
      document.getElementById("root").classList.add("pb-16");
    };
  }, []);

  let [emsUser, setEmsUser] = useState(null)
  let [invalidUser, setInvalidUser] = useState(true)
  const authData = useContext(EmsAuthContext)

  const handleLogin = (email, password) => {
    if(email == "admin@example.com" && password == "123456"){
      setEmsUser("admin")
    } else if(authData && authData.emsEmployees.find((e)=>email == e.email && password == e.password)){
      setEmsUser('employee')
    } else {
      setInvalidUser("Please enter correct email and password")
    }
  }

  return (
    <>
      {!emsUser ? <EmsLogin handleLogin={handleLogin} invalidUser={invalidUser} /> : ""}
      {emsUser == "admin" ? <EmsAdminDashboard dashboardTitle="Admin" /> : ""}
      {emsUser == "employee" ? <EmsEmployeeDashboard dashboardTitle="Employee" /> : ""}
    </>
  );
}

export default EmsMain;
