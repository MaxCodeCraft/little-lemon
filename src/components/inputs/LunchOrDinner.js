"use client";
import { useEffect, useState } from "react";
import TimeInput from "./TimeInput";
import { useDispatch, useSelector } from "react-redux";
import { setLunchOrDinner } from "@/reducer/reservation";

export default function LunchOrDinner() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = (event) => {
    setToggle(event.target.checked);
  };

  useEffect(() => {
    dispatch(setLunchOrDinner(toggle));
  }, [toggle]);

  return (
    <div className="flex flex-col gap-4">
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
    </div>
  );
}
