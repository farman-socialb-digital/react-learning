import { useContext, useEffect, useState } from "react";
import EmsLogin from "./EmsComponents/EmsAuth/EmsLogin";
import EmsEmployeeDashboard from "./EmsComponents/EmsDashboard/EmsEmployeeDashboard";
import EmsAdminDashboard from "./EmsComponents/EmsDashboard/EmsAdminDashboard";
import { EmsAuthContext } from "./EmsContext/EmsAuthProvider";

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

  const handleLogin = (email, password) => {
    if(email == "admin@example.com" && password == "123456"){
      setEmsUser("admin")
    } else if(email == "employee@example.com" && password == "123456"){
      setEmsUser('employee')
    } else {
      setInvalidUser("Please enter correct email and password")
    }
  }

  const data = useContext(EmsAuthContext)
  console.log(data)
  
  return (
    <>
      {!emsUser ? <EmsLogin handleLogin={handleLogin} invalidUser={invalidUser} /> : ""}
      {emsUser == "admin" ? <EmsAdminDashboard dashboardTitle="Admin" /> : ""}
      {emsUser == "employee" ? <EmsEmployeeDashboard dashboardTitle="Employee" /> : ""}
    </>
  );
}

export default EmsMain;
