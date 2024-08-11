"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  setOccasionError,
  setGuestsError,
  setTimeError,
  setDateError,
  setNameError,
  setPhoneError,
  setEmailError,
} from "@/reducer/formerrors";
import { useRouter } from "next/navigation";

export default function SubmitButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const occasion = useSelector((state) => state.reservation.occasion);
  const guests = useSelector((state) => state.reservation.guests);
  const time = useSelector((state) => state.reservation.time);
  const date = useSelector((state) => state.reservation.date);
  const name = useSelector((state) => state.reservation.name);
  const phone = useSelector((state) => state.reservation.phone);
  const email = useSelector((state) => state.reservation.email);
  const namePattern = /^[A-Za-zÀ-ÖØ-ÿ]+$/;
  const phonePattern = /^[0-9\(\)\- ]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClick = () => {
    let hasError = false;

    if (occasion === "") {
      dispatch(setOccasionError(true));
      hasError = true;
    } else {
      dispatch(setOccasionError(false));
    }

    if (guests === undefined || guests === "") {
      dispatch(setGuestsError(true));
      hasError = true;
    } else {
      dispatch(setGuestsError(false));
    }

    if (time === "") {
      dispatch(setTimeError(true));
      hasError = true;
    } else {
      dispatch(setTimeError(false));
    }

    if (date === "") {
      dispatch(setDateError(true));
      hasError = true;
    } else {
      dispatch(setDateError(false));
    }

    if (name === "" || !namePattern.test(name)) {
      dispatch(setNameError(true));
      hasError = true;
    } else {
      dispatch(setNameError(false));
    }

    if (phone === "" || !phonePattern.test(phone)) {
      dispatch(setPhoneError(true));
      hasError = true;
    } else {
      dispatch(setPhoneError(false));
    }

    if (email === "" || !emailPattern.test(email)) {
      dispatch(setEmailError(true));
      hasError = true;
    } else {
      dispatch(setEmailError(false));
    }

    if (!hasError) {
      router.push("/booking-confirmation");
    }
  };

  return (
    <button
      className="w-auto rounded-2xl bg-primaryYellow px-12 py-4 text-xl font-bold shadow-lg hover:bg-secondaryLightPeach active:bg-secondarySoftCoral"
      onClick={handleClick}
    >
      Submit Booking
    </button>
  );
}
