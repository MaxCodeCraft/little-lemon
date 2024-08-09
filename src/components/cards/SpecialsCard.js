import Image from "next/image";
import Link from "next/link";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpecialsCard(props) {
  return (
    <div className="flex h-[600px] w-80 flex-col overflow-hidden rounded-t-2xl bg-neutral-200">
      <Image
        src={props.img}
        width={320}
        height={250}
        className="max-h-[250px] min-h-[250px] object-cover"
      />
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex justify-between">
          <h4 className="text-xl font-bold">{props.title}</h4>
          <p className="text-xl font-semibold text-secondarySoftCoral">{`$${props.price.toFixed(2)}`}</p>
        </div>
        <p className="h-40">{props.desc}</p>
        <Link href={"/order-online"}>
          <div className="flex items-center gap-4">
            <p className="font-bold">Order a delivery</p>
            <FontAwesomeIcon icon={faMotorcycle} size="sm" className="w-8" />
          </div>
        </Link>
      </div>
    </div>
  );
}
