import React, { useEffect, useState } from "react";
import { getIssues } from "../../data/data";
import "./Issue.scss";
import StatusSelect from "../StatusSelect/StatusSelect";
import Subtasks from "../Subtasks/Subtasks";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  subtasks: number[];
}
const Issue = () => {
  const [task, setTask] = useState<Task>();
  useEffect(() => {
    getIssues()
      .then((data) => {
        setTask(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  if (!task) {
    return null;
  }
  return (
    <div className="task-parent-wrapper">
      <div className="task-wrapper">
        <div className="task-tile">{task?.title}</div>
        <StatusSelect
          currentStatus={task?.status || "Done"}
          taskId={task?.id || -1}
        />
      </div>
      <>
        {task?.subtasks?.length && <Subtasks subtasks={task?.subtasks || []} />}
      </>
    </div>
  );
};

export default Issue;
