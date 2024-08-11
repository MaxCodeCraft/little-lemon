import LogoSmall from "../links/LogoSmall";
import navLinksData from "@/data/navlinksdata";
import NavLink from "../links/NavLink";
import HamburgerMenu from "./HamburgerMenu";

const links = navLinksData.map((link) => {
  return <NavLink title={link.title} url={link.url} key={link.id} />;
});

export default function Header() {
  return (
    <div className="flex h-20 w-screen items-center justify-center bg-white lg:h-24">
      <div className="hidden w-full max-w-5xl items-center justify-between lg:flex">
        <LogoSmall />
        {links}
      </div>
      <HamburgerMenu />
    </div>
  );
}
