import Image from "next/image";
import Link from "next/link";
import logoSmall from "@/assets/images/logo-small.png";

export default function LogoSmall() {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        src={logoSmall}
        width={210}
        height={63}
        alt="Little Lemon restaurant logo"
      />
    </Link>
  );
}
