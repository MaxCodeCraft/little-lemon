import YellowButton from "../buttons/YellowButton";
import SpecialsCard from "../cards/SpecialsCard";
import dishesMenu from "@/data/dishes";

const specials = dishesMenu.map((dish) => {
  return (
    <SpecialsCard
      key={dish.id}
      title={dish.title}
      img={dish.img}
      price={dish.price}
      desc={dish.desc}
    />
  );
});

export default function Highlights() {
  return (
    <div className="flex w-screen flex-col items-center bg-white py-12 lg:flex-row lg:justify-center">
      <div className="w-full lg:max-w-5xl">
        <div className="flex h-56 flex-wrap items-center justify-center pb-8 lg:justify-between lg:pb-0">
          <h3 className="font-markazi text-5xl lg:text-7xl">
            This weeks specials!
          </h3>
          <YellowButton text={"Online Menu"} url={"/menu"} />
        </div>
        <div className="flex w-full flex-wrap gap-8">{specials}</div>
      </div>
    </div>
  );
}
