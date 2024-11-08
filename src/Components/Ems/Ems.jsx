import { useEffect } from "react";
// import EmsLogin from "./EmsComponents/EmsAuth/EmsLogin";
// import EmsAdminDashboard from "./EmsComponents/EmsDashboard/EmsAdminDashboard"
import EmsEmployeeDashboard from "./EmsComponents/EmsDashboard/EmsEmployeeDashboard"

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
      {/* <EmsLogin /> */}
      {/* <EmsAdminDashboard /> */}
      <EmsEmployeeDashboard />
    </>
  );
}

export default Ems;
