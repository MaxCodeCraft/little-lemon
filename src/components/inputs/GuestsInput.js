"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function GuestsInput() {
  return (
    <div className="relative w-72">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <FontAwesomeIcon icon={faUsers} className="text-primaryGreen" />
      </div>
      <select
        className="block w-full appearance-none rounded-lg bg-gray-100 py-4 pr-8 text-center text-xl font-bold text-primaryGreen shadow-lg focus:outline-none"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Number of Guests
        </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <FontAwesomeIcon icon={faChevronDown} className="text-primaryGreen" />
      </div>
    </div>
  );
}
