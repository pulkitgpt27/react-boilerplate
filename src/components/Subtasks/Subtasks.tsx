import React, { useState } from "react";
import "./Subtasks.scss";
import Subtask from "./Subtask/Subtask";

type Props = {
  subtasks: Array<number>;
};
const Subtasks = ({ subtasks }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const toggleText = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <div
        className="issue-subtasks-head"
        title={`${subtasks.length} subtasks`}
        onClick={toggleText}
      >
        {collapse ? "▼ Subtasks" : "▶ Show Subtasks"}
      </div>
      {collapse && (
        <ol>
          {subtasks.map((subtask) => (
            <Subtask subtaskId={subtask} key={subtask} />
          ))}
        </ol>
      )}
    </>
  );
};

export default Subtasks;
