"use client";
import DateInput from "@/components/inputs/DateInput";
import GuestsInput from "@/components/inputs/GuestsInput";
import LunchOrDinner from "@/components/inputs/LunchOrDinner";
import OccasionDropdown from "@/components/inputs/OccasionDropdown";
import YellowButton from "@/components/buttons/YellowButton";
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
  }, []);
  return (
    <div className="my-8 flex flex-col gap-8">
      <OccasionDropdown />
      <GuestsInput />
      <DateInput />
      <LunchOrDinner />
    </div>
  );
}
