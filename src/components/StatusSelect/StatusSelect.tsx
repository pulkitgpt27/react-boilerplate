import React, { useState } from "react";
import "./StatusSelect.scss";
import { statuses, updateStatus } from "../../data/data";
type Props = {
  currentStatus: string;
  taskId: number;
};
const StatusSelect = ({ currentStatus, taskId }: Props): React.ReactElement => {
  const [status, setStatus] = useState<string>(currentStatus);

  const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    updateStatus(taskId, newStatus)
      .then((data) => {
        if (data.success) {
          setStatus(newStatus);
        }
      })
      .catch(() => {
        console.log("Error");
      });
  };

  return (
    <div className="task-select-wrapper">
      <select className="task-select" value={status} onChange={changeStatus}>
        {statuses.map((option: string) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default StatusSelect;
