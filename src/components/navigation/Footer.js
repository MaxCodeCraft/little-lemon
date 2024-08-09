import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import LogoLarge from "../links/LogoLarge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="flex w-screen justify-center bg-neutral-200 py-16">
      <div className="flex w-full max-w-5xl justify-between">
        <LogoLarge />
        <div className="flex flex-col gap-4">
          <h5 className="font-bold underline">Navigation</h5>
          <Link
            href={"/"}
            className="hover:font-semibold hover:text-primaryGreen"
          >
            Home
          </Link>
          <Link
            href={"/#about"}
            className="hover:font-semibold hover:text-primaryGreen"
          >
            About
          </Link>
          <Link
            href={"/menu"}
            className="hover:font-semibold hover:text-primaryGreen"
          >
            Menu
          </Link>
          <Link
            href={"/reserve-table"}
            className="hover:font-semibold hover:text-primaryGreen"
          >
            Reservations
          </Link>
          <Link
            href={"/order-online"}
            className="hover:font-semibold hover:text-primaryGreen"
          >
            Order Online
          </Link>
          <Link
            href={"/login"}
            className="hover:font-semibold hover:text-primaryGreen"
          >
            Login
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-bold underline">Contact</h5>
          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              size="lg"
              className="w-5 text-primaryGreen"
            />
            <p>
              1234 West Elm Street,
              <br />
              Chicago, IL 60622
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              size="lg"
              className="w-5 text-primaryGreen"
            />
            <p>(312) 555-6789</p>
          </div>
          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="w-5 text-primaryGreen"
            />
            <p>info@littlelemonchicago.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-bold underline">Social Medias</h5>
          <FontAwesomeIcon
            icon={faFacebook}
            size="xl"
            className="w-10 cursor-pointer text-primaryGreen"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            className="w-10 cursor-pointer text-primaryGreen"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="xl"
            className="w-10 cursor-pointer text-primaryGreen"
          />
        </div>
      </div>
    </div>
  );
}
