import EmsApp from "./EmsApp";
import EmsContext from "./EmsContext/EmsContext";
function Ems() {
  return (
    <EmsContext>
      <EmsApp />
    </EmsContext>
  );
}

export default Ems;
