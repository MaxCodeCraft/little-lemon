import DateInput from "@/components/inputs/DateInput";
import GuestsInput from "@/components/inputs/GuestsInput";
import LunchOrDinner from "@/components/inputs/LunchOrDinner";
import OccasionDropdown from "@/components/inputs/OccasionDropdown";
import YellowButton from "@/components/buttons/YellowButton";

export default function ReserveTable() {
  return (
    <div className="my-8 flex flex-col gap-8">
      <OccasionDropdown />
      <GuestsInput />
      <LunchOrDinner />
    </div>
  );
}
