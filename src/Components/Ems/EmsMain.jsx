import { useEffect } from "react";
import App from "./App";
import EmsAuthProvider from "./EmsContext/EmsAuthProvider";

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
    <EmsAuthProvider>
      <App />
    </EmsAuthProvider>
  );
}

export default Ems;
