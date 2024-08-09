import LogoSmall from "../links/LogoSmall";
import navLinksData from "@/data/navlinksdata";
import NavLink from "../links/NavLink";

export default function Header() {
  const links = navLinksData.map((link) => {
    return <NavLink title={link.title} url={link.url} key={link.id} />;
  });

  return (
    <div className="flex h-24 w-screen items-center justify-center bg-white">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <LogoSmall />
        {links}
      </div>
    </div>
  );
}
