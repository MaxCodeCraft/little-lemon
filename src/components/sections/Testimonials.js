import TestimonialCard from "../cards/TestimonialCard";
import userRatings from "@/data/ratings";

const testimonials = userRatings.map((rating) => {
  return (
    <TestimonialCard
      key={rating.id}
      username={rating.username}
      rating={rating.rating}
      review={rating.review}
      photo={rating.photo}
    />
  );
});

export default function Testimonials() {
  return (
    <div className="flex w-screen justify-center bg-primaryGreen py-10">
      <div className="flex w-full max-w-5xl flex-col items-center gap-8 py-8">
        <h3 className="font-markazi text-5xl text-primaryYellow lg:text-7xl">
          Testimonials
        </h3>
        <div className="flex w-full gap-5 overflow-x-auto py-8">
          {testimonials}
        </div>
      </div>
    </div>
  );
}
