"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "@/reducer/reservation";

export default function NameInput() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.reservation.name);

  return (
    <div className="relative w-80">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <FontAwesomeIcon icon={faUser} className="text-primaryGreen" />
      </div>
      <input
        className={`${useSelector((state) => state.formerrors.name) && "border-e-4 border-s-4 border-red-500"} block w-full appearance-none rounded-lg bg-highlightLight py-4 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none`}
        value={name}
        type="text"
        placeholder="John Doe"
        onChange={(e) => dispatch(setName(e.target.value))}
      />
    </div>
  );
}
