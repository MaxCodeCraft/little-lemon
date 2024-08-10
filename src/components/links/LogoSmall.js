import Image from "next/image";
import Link from "next/link";

export default function LogoSmall() {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        src={"/static/img/logo-small.png"}
        width={210}
        height={63}
        alt="Little Lemon restaurant logo"
        className="w-[170px] lg:w-[210px]"
      />
    </Link>
  );
}
