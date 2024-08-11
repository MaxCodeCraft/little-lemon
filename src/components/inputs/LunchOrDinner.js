"use client";
import { useState } from "react";
import TimeInput from "./TimeInput";

export default function LunchOrDinner() {
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = (event) => {
    setToggle(event.target.checked);
  };

  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span
            className={`label-text text-xl font-bold ${toggle ? "text-white" : "text-primaryYellow"}`}
          >
            Lunch
          </span>
          <input
            type="checkbox"
            className="toggle"
            checked={toggle}
            onChange={handleToggleChange}
          />
          <span
            className={`label-text text-xl font-bold ${toggle ? "text-primaryYellow" : "text-white"}`}
          >
            Dinner
          </span>
        </label>
      </div>
      <TimeInput lunchOrDinner={toggle ? "dinner" : "lunch"} />
    </>
  );
}
