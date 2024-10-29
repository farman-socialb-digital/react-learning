import React, { useState } from "react";
import Button from "../Common/Button";

function ConditionalRendering() {
  let [isLogin, setIsLogin] = useState(true);

  // if(!isLogin){
  //   return(
  //     <Button name="Login" bgColor="green"/>
  //   )
  // }

  // return(
  //   <>
  //     {isLogin && <Button name="Logout" bgColor="red"/>}
  //   </>
  // )

  // return(
  //   <>
  //     {isLogin ? <Button name="Logout" bgColor="red"/> : <Button name="Login" bgColor="green"/>}
  //   </>
  // )

  if (isLogin) {
    return <Button name="Logout" bgColor="red" />;
  } else {
    return <Button name="Login" bgColor="green" />;
  }
}

export default ConditionalRendering;
