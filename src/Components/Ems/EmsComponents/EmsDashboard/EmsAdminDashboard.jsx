import EmsSidebar from "../Other/EmsSidebar";
import EmsHeader from "../Other/EmsHeader";
import CreateTask from "../Other/CreateTask";
import { useContext } from "react";
import { EmsAuthContext } from "../../EmsContext/EmsAuthProvider";

function EmsAdminDashboard(props) {
  
  const authData = useContext(EmsAuthContext)

  return (
    <div className="flex h-screen">
      <EmsSidebar dashboardTitle="Admin" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <EmsHeader dashboardTitle={props.dashboardTitle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto custom-scrollbar">
          <div className="container mx-auto py-5 mb-12">
            <h3 className="text-lg text-slate-400 font-bold">
              Dashboard {props.dashboardTitle}
            </h3>
            <div className="mt-4">
              <CreateTask />
            </div>
            <div className="mt-14 mx-5">
              {props.loggedInUserData.emsEmployees.map((elm, i)=>{
                <div className="flex justify-between rounded-md text-slate-300 bg-green-900 p-3 px-5 mb-5" key={i}>
                <div>Farman Ali</div>
                <div>Make a UI design</div>
                <div>Status</div>
              </div>
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmsAdminDashboard;
