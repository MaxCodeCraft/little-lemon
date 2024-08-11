import ReduxProvider from "@/providers/ReduxProvider";
import BookingConfirmation from "@/components/sections/BookingConfirmation";

export default function BookingConfirmationPage() {
  return (
    <ReduxProvider>
      <BookingConfirmation />
    </ReduxProvider>
  );
}
