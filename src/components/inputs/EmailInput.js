"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "@/reducer/reservation";

export default function EmailInput() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.reservation.email);

  return (
    <div className="relative w-80">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <FontAwesomeIcon icon={faEnvelope} className="text-primaryGreen" />
      </div>
      <input
        className={`${useSelector((state) => state.formerrors.email) && "border-e-4 border-s-4 border-red-500"} block w-full appearance-none rounded-lg bg-highlightLight py-4 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none`}
        type="email"
        placeholder="john@example.com"
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
    </div>
  );
}
