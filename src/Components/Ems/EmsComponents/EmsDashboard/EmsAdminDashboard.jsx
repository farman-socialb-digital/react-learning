import EmsSidebar from "../Other/EmsSidebar";
import EmsHeader from "../Other/EmsHeader";
import CreateTask from "../Other/CreateTask";
import { useContext } from "react";
import { EmsAuthContext } from "../../EmsContext/EmsAuthProvider";

function EmsAdminDashboard(props) {
  const authData = useContext(EmsAuthContext);

  return (
    <div className="flex h-screen">
      <EmsSidebar dashboardTitle="Admin" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <EmsHeader changeUser={props.changeUser} dashboardTitle={props.dashboardTitle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto custom-scrollbar">
          <div className="container mx-auto py-5 mb-12">
            <h3 className="text-lg text-slate-400 font-bold">
              Dashboard {props.dashboardTitle}
            </h3>
            <div className="mt-4">
              <CreateTask />
            </div>
            <div className="font-medium py-3 text-slate-400 bg-slate-800 rounded-md">
              <div className="flex justify-between rounded-md text-slate-500 px-5">
                <div className="w-1/5">Full Name</div>
                <div className="w-1/5">New Tasks</div>
                <div className="w-1/5">Active Tasks</div>
                <div className="w-1/5">Completed Tasks</div>
                <div className="w-1/5">Failed Tasks</div>
              </div>
            </div>
            <div className="mt-2">
              {authData.emsEmployees.map((e, i) => {
                return (
                  <div
                    className="flex justify-between rounded-md text-slate-500 border border-slate-700 p-3 px-5 mb-2"
                    key={i}
                  >
                    <div className="w-1/5">{e.fullName}</div>
                    <div className="w-1/5 text-green-600">{e.taskCounts.newTask}</div>
                    <div className="w-1/5 text-yellow-600">{e.taskCounts.active}</div>
                    <div className="w-1/5">{e.taskCounts.completed}</div>
                    <div className="w-1/5 text-red-600">{e.taskCounts.failed}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmsAdminDashboard;
