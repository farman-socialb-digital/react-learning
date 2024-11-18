import EmsAcceptTask from "../EmsTaskList/EmsAcceptTask";
import EmsCompleteTask from "../EmsTaskList/EmsCompleteTask";
import EmsFailedTask from "../EmsTaskList/EmsFailedTask";
import EmsNewTask from "../EmsTaskList/EmsNewTask";

function AllTasks(props) {
  return (
    <div className="grid grid-cols-12 gap-8 px-5 text-gray-400 text-left">
      {props.loggedInUserData.tasks.map((e, i) => {
        if (e.active) {
          return <div className="md:col-span-3" key={i}>
            <EmsAcceptTask />
          </div>;
        }
        if (e.newTask) {
          return <div className="md:col-span-3" key={i}>
            <EmsNewTask />
          </div>;
        }
        if (e.completed) {
          return <div className="md:col-span-3" key={i}>
            <EmsCompleteTask />
          </div>;
        }
        if (e.failed) {
          return <div className="md:col-span-3" key={i}>
            <EmsFailedTask />
          </div>;
        }
      })}
    </div>
  );
}

export default AllTasks;
