import Image from "next/image";
import navLinksData from "@/data/navlinksdata";
import NavLink from "../links/NavLink";
import logo from "@/assets/images/logo-small.png";

export default function Header() {
  const links = navLinksData.map((link) => {
    return <NavLink title={link.title} url={link.url} key={link.id} />;
  });

  return (
    <div className="flex h-24 w-screen items-center justify-center bg-white">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <Image
          src={logo}
          width={210}
          height={68}
          alt="Little Lemon restaurant logo"
        />
        {links}
      </div>
    </div>
  );
}
