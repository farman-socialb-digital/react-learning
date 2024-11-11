import EmsSidebar from "../Other/EmsSidebar";
import EmsHeader from "../Other/EmsHeader";
import TaskListNumbers from "../Other/TaskListNumbers";
import AllTasks from "../Other/AllTasks";

function EmsEmployeeDashboard(props) {
  return (
    <div className="flex h-screen">
      <EmsSidebar dashTitle="Employee" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <EmsHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto custom-scrollbar">
          <div className="container mx-auto py-5 mb-12">
            <h3 className="text-lg text-slate-400 font-bold">
              Dashboard {props.dashTitle}
            </h3>
            <div className="mt-4">
              <TaskListNumbers />
            </div>
            <div className="mt-14">
              <AllTasks />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmsEmployeeDashboard;
