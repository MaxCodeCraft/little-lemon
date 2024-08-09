import Image from "next/image";
import YellowButton from "../buttons/YellowButton";
import heroImage from "@/assets/images/hero-image.jpg";

export default function HeroSection() {
  return (
    <div className="flex w-screen justify-center bg-primaryGreen px-4 py-4 lg:px-0">
      <div className="flex w-full max-w-5xl flex-col lg:h-96 lg:flex-row">
        <div className="flex flex-col gap-8 py-4 lg:w-[60%] lg:justify-between lg:gap-0">
          <div className="flex flex-col font-markazi">
            <h1 className="text-7xl font-medium text-primaryYellow">
              Little Lemon
            </h1>
            <h3 className="text-4xl text-white">Chicago</h3>
          </div>
          <p className="text-white lg:w-96">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            minima fugiat omnis nesciunt voluptate rerum veritatis sequi quidem
            temporibus nobis, laboriosam, inventore dicta, reiciendis officiis
            qui similique quod nemo deleniti?
          </p>
          <YellowButton text={"Reserve a Table"} url={"/reserve-table"} />
        </div>
        <div className="lg:relative lg:w-[40%]">
          <Image
            src={heroImage}
            width={410}
            height={500}
            alt="Photo of a chief holding a plate full of dishes"
            className="h-[350px] w-full rounded-2xl object-cover lg:absolute lg:h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
