"use client";
import { useSelector } from "react-redux";

export default function BookingConfirmation() {
  return (
    <div className="flex w-screen flex-col items-center gap-8 bg-primaryGreen py-8">
      <div className="flex w-11/12 flex-col gap-8 pb-4 lg:w-full lg:max-w-5xl">
        <h3 className="text-center font-markazi text-5xl text-primaryYellow">
          Thank you for your reservation!
        </h3>
        <p className="text-lg text-white">
          Your table at Little Lemon is confirmed.
          <br /> We can't wait to welcome you and provide an unforgettable
          dining experience. If you need to make any changes or have any special
          requests, feel free to contact us.
          <br /> See you soon!
        </p>
        <div className="flex flex-col gap-4 py-8">
          <div>
            <h5 className="text-xl font-bold text-primaryYellow">Your Name:</h5>
            <p className="font-semibold text-white">
              {useSelector((state) => state.reservation.name)}
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold text-primaryYellow">
              Your Phone number:
            </h5>
            <p className="font-semibold text-white">
              {useSelector((state) => state.reservation.phone)}
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold text-primaryYellow">
              Number of Guests:
            </h5>
            <p className="font-semibold text-white">
              {useSelector((state) => state.reservation.name)}
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold text-primaryYellow">
              Date of Reservation:
            </h5>
            <p className="font-semibold text-white">
              {useSelector((state) => state.reservation.date)}
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold text-primaryYellow">
              Your Expected Arrival Time:
            </h5>
            <p className="font-semibold text-white">
              {useSelector((state) => state.reservation.time)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
