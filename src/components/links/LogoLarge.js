import Image from "next/image";
import Link from "next/link";

export default function LogoLarge() {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        src={"/static/img/logo-large.png"}
        width={153}
        height={253}
        alt="Little Lemon restaurant logo"
        className="hidden lg:block"
      />
    </Link>
  );
}
