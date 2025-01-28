import { createContext, useEffect, useState } from "react";
import { emsGetLocalStorage } from "../EmsUtils/EmsLocalStorage";

export const EmsAuthContext = createContext();

function EmsAuthProvider(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const {emsEmployees} = emsGetLocalStorage();
    setUserData(emsEmployees);
  }, []);

  return (
    <>
      <EmsAuthContext.Provider value={[userData, setUserData]}>
        {props.children}
      </EmsAuthContext.Provider>
    </>
  );
}

export default EmsAuthProvider;
