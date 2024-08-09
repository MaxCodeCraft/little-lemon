import Image from "next/image";
import Link from "next/link";
import logoSmall from "@/assets/images/logo-large.png";

export default function LogoLarge() {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        src={logoSmall}
        width={153}
        height={253}
        alt="Little Lemon restaurant logo"
      />
    </Link>
  );
}
