import React, { useEffect, useState } from "react";
import { getIssues } from "../../../data/data";
import type { Task } from "../../Issue/Issue";
import "./Subtask.scss";

type Props = {
  subtaskId: number;
};
const Subtask = ({ subtaskId }: Props) => {
  const [subtask, setSubtask] = useState<Task>();
  useEffect(() => {
    getIssues().then((data) => {
      setSubtask(data);
    });
  }, []);

  if (!subtask) {
    return null;
  }
  return (
    <li>
      {subtaskId}
      <div className="subtask-detail-wrapper">
        <div>{subtask.title}</div>
        <div>{subtask.description}</div>
        <div>{subtask.status}</div>
      </div>
    </li>
  );
};

export default Subtask;
