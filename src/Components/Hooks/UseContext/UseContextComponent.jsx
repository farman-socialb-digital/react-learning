import React, { createContext, useState } from "react";
import ChildA from "./ChildA";

// Step 1 : Create Context
const UserContext = createContext();
const RollContext = createContext();

// Step 2 : Wrap all the child inside a provider who wants to become consumer
// Step 3 : Pass value
// Step 4 : Export Context
// Step 5 : Consumer k andar jaake consume kr lo

function UseContextComponent() {
  let [user, setUser] = useState("Any Name");
  let [roll, setRoll] = useState("Admin");
  return (
    <UserContext.Provider value={user}>
      <RollContext.Provider value={roll}>
        <ChildA />
      </RollContext.Provider>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
export { UserContext };
export { RollContext };
