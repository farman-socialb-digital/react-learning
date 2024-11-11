import { useEffect } from "react";
import EmsLogin from "./EmsComponents/EmsAuth/EmsLogin";
import EmsEmployeeDashboard from "./EmsComponents/EmsDashboard/EmsEmployeeDashboard"
import EmsAdminDashboard from "./EmsComponents/EmsDashboard/EmsAdminDashboard"

function Ems() {
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

  return (
    <>
      <EmsLogin />
      {/* <EmsEmployeeDashboard dashTitle="Employee" /> */}
      {/* <EmsAdminDashboard dashTitle="Admin" /> */}
    </>
  );
}

export default Ems;
