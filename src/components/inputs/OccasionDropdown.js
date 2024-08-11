"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setOccasion } from "@/reducer/reservation";

export default function OccasionDropdown() {
  const dispatch = useDispatch();
  const occasion = useSelector((state) => state.reservation.occasion);

  return (
    <div className="relative w-80">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <FontAwesomeIcon icon={faGlassCheers} className="text-primaryGreen" />
      </div>
      <select
        className={`${useSelector((state) => state.formerrors.occasion) && "border-e-4 border-s-4 border-red-500"} block w-full appearance-none rounded-lg bg-highlightLight py-4 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none`}
        value={occasion}
        onChange={(e) => dispatch(setOccasion(e.target.value))}
      >
        <option value="" disabled hidden>
          Occasion
        </option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
        <option value="other">Other ...</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <FontAwesomeIcon icon={faChevronDown} className="text-primaryGreen" />
      </div>
    </div>
  );
}
