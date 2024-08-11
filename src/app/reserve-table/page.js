import ReduxProvider from "@/providers/ReduxProvider";
import ReserveTable from "@/components/sections/ReserveTable";
import SubmitButton from "@/components/buttons/SubmitButton";

export default function ReservePage() {
  return (
    <div className="flex w-screen flex-col items-center gap-8 bg-primaryGreen py-8">
      <div className="flex w-11/12 flex-col gap-8 pb-4 lg:w-full lg:max-w-5xl">
        <h3 className="text-center font-markazi text-5xl text-primaryYellow">
          Reserve a Table
        </h3>
        <p className="text-lg text-white">
          Indulge in the vibrant flavors of Mediterranean cuisine with a modern
          twist at Little Lemon in the heart of Chicago.
          <br /> Whether you're planning a cozy dinner for two or a lively
          gathering with friends, we look forward to making your dining
          experience unforgettable.
          <br /> Reserve your table today and savor the perfect blend of
          tradition and innovation in every bite.
        </p>
      </div>
      <div className="flex w-11/12 flex-col gap-8 lg:w-full lg:max-w-5xl lg:flex-row lg:justify-around lg:gap-0">
        <ReduxProvider>
          <ReserveTable />
        </ReduxProvider>
      </div>
      <ReduxProvider>
        <SubmitButton />
      </ReduxProvider>
    </div>
  );
}
