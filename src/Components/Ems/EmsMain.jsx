import App from "./App";
import EmsAuthProvider from "./EmsContext/EmsAuthProvider";

function Ems() {
  return (
    <EmsAuthProvider>
      <App />
    </EmsAuthProvider>
  );
}

export default Ems;
