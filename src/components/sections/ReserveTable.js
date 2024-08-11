"use client";
import DateInput from "@/components/inputs/DateInput";
import GuestsInput from "@/components/inputs/GuestsInput";
import LunchOrDinner from "@/components/inputs/LunchOrDinner";
import OccasionDropdown from "@/components/inputs/OccasionDropdown";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setOccasion,
  setGuests,
  setLunchOrDinner,
  setTime,
  setDate,
  setName,
  setPhone,
  setEmail,
} from "@/reducer/reservation";
import NameInput from "../inputs/NameInput";
import PhoneInput from "../inputs/PhoneInput";
import EmailInput from "../inputs/EmailInput";

export default function ReserveTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOccasion(""));
    dispatch(setGuests(undefined));
    dispatch(setLunchOrDinner(false));
    dispatch(setTime(""));
    dispatch(setDate(""));
    dispatch(setName(""));
    dispatch(setPhone(""));
    dispatch(setEmail(""));
  });

  return (
    <>
      <div className="flex w-full flex-col items-center gap-8 lg:w-auto">
        <OccasionDropdown />
        <GuestsInput />
        <DateInput />
        <LunchOrDinner />
      </div>
      <div className="flex w-full flex-col items-center gap-8 lg:w-auto">
        <NameInput />
        <PhoneInput />
        <EmailInput />
      </div>
    </>
  );
}
