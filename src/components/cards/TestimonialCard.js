import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TestimonialCard(props) {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        key={i}
        size="lg"
        className="w-4 text-primaryYellow"
      />,
    );
  }
  for (let i = props.rating; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStarRegular}
        key={i}
        size="lg"
        className="w-4 text-primaryYellow"
      />,
    );
  }
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg">
      <div className="flex">{stars}</div>
      <div className="flex gap-4">
        <Image
          src={props.photo}
          width={112}
          height={112}
          className="h-28 w-28 rounded-full"
        />
        <p className="w-72 lg:w-80">{`"${props.review.slice(0, 150)}"`}</p>
      </div>
      <p className="cursor-pointer font-bold underline">{props.username}</p>
    </div>
  );
}
