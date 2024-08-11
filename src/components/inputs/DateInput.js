"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import {
  faCalendarDays,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "@/reducer/reservation";

export default function DateInput() {
  const dispatch = useDispatch();
  const choosenDate = useSelector((state) => state.reservation.date);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="relative w-80">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <FontAwesomeIcon icon={faCalendarDays} className="text-primaryGreen" />
      </div>
      <div
        className={`${useSelector((state) => state.formerrors.date) && "border-e-4 border-s-4 border-red-500"} block w-full appearance-none rounded-lg bg-highlightLight py-4 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none`}
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            dispatch(setDate(date.toDateString()));
          }}
          className="bg-highlightLight text-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <FontAwesomeIcon icon={faChevronDown} className="text-primaryGreen" />
      </div>
    </div>
  );
}
