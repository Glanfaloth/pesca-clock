import React from "react";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";

export default function TimerLengthControl({
  length,
  onClick,
  title,
}) {
  return (
    <div className="length-control">
      <div>{title}</div>
      <button className="btn-level" onClick={onClick} value="-">
        <AiOutlineArrowDown size={40} />
      </button>
      <div className="btn-level">
        {length}
      </div>
      <button className="btn-level" onClick={onClick} value="+">
        <AiOutlineArrowUp size={40}/>
      </button>
    </div>
  );
}