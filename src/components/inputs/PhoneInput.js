"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setPhone } from "@/reducer/reservation";
import { useState } from "react";

export default function PhoneInput() {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.reservation.phone);

  return (
    <div>
      <div className="relative w-80">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <FontAwesomeIcon icon={faPhoneVolume} className="text-primaryGreen" />
        </div>
        <input
          className={`${useSelector((state) => state.formerrors.phone) && "border-e-4 border-s-4 border-red-500"} block w-full appearance-none rounded-lg bg-highlightLight py-4 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none`}
          type="text"
          placeholder="123-456-789"
          onChange={(e) => dispatch(setPhone(e.target.value))}
        />
      </div>
    </div>
  );
}
