import ReduxProvider from "@/providers/ReduxProvider";
import ReserveTable from "@/components/sections/ReserveTable";

export default function ReservePage() {
  return (
    <div className="flex w-screen justify-center bg-primaryGreen">
      <div className="flex w-full max-w-5xl flex-col lg:flex-row">
        <ReduxProvider>
          <ReserveTable />
        </ReduxProvider>
      </div>
    </div>
  );
}
