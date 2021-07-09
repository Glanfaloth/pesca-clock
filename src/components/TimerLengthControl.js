import React from "react";

export default function TimerLengthControl({
  addID,
  length,
  lengthID,
  minID,
  onClick,
  title,
  titleID,
}) {
  return (
    <div className="length-control">
      <div id={titleID}>{title}</div>
      <button className="btn-level" id={minID} onClick={onClick} value="-">
        <i className="fa fa-arrow-down fa-2x" />
      </button>
      <div className="btn-level" id={lengthID}>
        {length}
      </div>
      <button className="btn-level" id={addID} onClick={onClick} value="+">
        <i className="fa fa-arrow-up fa-2x" />
      </button>
    </div>
  );
}
