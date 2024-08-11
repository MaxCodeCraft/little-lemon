"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "@/reducer/reservation";

export default function TimeInput(props) {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.reservation.time);

  return (
    <>
      {props.lunchOrDinner === "lunch" && (
        <div className="relative w-72">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <FontAwesomeIcon icon={faClock} className="text-primaryGreen" />
          </div>
          <select
            className="block w-full appearance-none rounded-lg bg-gray-100 py-4 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none"
            defaultValue=""
            onChange={(e) => dispatch(setTime(e.target.value))}
          >
            <option value="" disabled hidden>
              Time of Lunch
            </option>
            <option value="12:00PM">12:00PM</option>
            <option value="12:15PM">12:15PM</option>
            <option value="12:30PM">12:30PM</option>
            <option value="12:45PM">12:45PM</option>
            <option value="01:00PM">01:00PM</option>
            <option value="01:15PM">01:15PM</option>
            <option value="01:30PM">01:30PM</option>
            <option value="01:45PM">01:45PM</option>
            <option value="02:00PM">02:00PM</option>
            <option value="02:15PM">02:15PM</option>
            <option value="02:30PM">02:30PM</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-primaryGreen"
            />
          </div>
        </div>
      )}
      {props.lunchOrDinner === "dinner" && (
        <div className="relative w-72">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <FontAwesomeIcon icon={faClock} className="text-primaryGreen" />
          </div>
          <select
            className="block w-full appearance-none rounded-lg bg-gray-100 py-4 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none"
            defaultValue=""
            onChange={(e) => dispatch(setTime(e.target.value))}
          >
            <option value="" disabled hidden>
              Time of Dinner
            </option>
            <option value="07:00PM">07:00PM</option>
            <option value="07:15PM">07:15PM</option>
            <option value="07:30PM">07:30PM</option>
            <option value="07:45PM">07:45PM</option>
            <option value="08:00PM">08:00PM</option>
            <option value="08:15PM">08:15PM</option>
            <option value="08:30PM">08:30PM</option>
            <option value="08:45PM">08:45PM</option>
            <option value="09:00PM">09:00PM</option>
            <option value="09:15PM">09:15PM</option>
            <option value="09:30PM">09:30PM</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-primaryGreen"
            />
          </div>
        </div>
      )}
    </>
  );
}
