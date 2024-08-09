import Image from "next/image";
import YellowButton from "../buttons/YellowButton";
import heroImage from "@/assets/images/hero-image.jpg";

export default function HeroSection() {
  return (
    <div className="flex w-screen justify-center bg-primaryGreen py-4">
      <div className="flex h-96 w-full max-w-5xl flex-wrap">
        <div className="flex w-[60%] flex-col justify-between py-4">
          <div className="font-markazi flex flex-col">
            <h1 className="text-7xl font-medium text-primaryYellow">
              Little Lemon
            </h1>
            <h3 className="text-4xl text-white">Chicago</h3>
          </div>
          <p className="w-96 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            minima fugiat omnis nesciunt voluptate rerum veritatis sequi quidem
            temporibus nobis, laboriosam, inventore dicta, reiciendis officiis
            qui similique quod nemo deleniti?
          </p>
          <YellowButton text={"Reserve a Table"} url={"/reserve-table"} />
        </div>
        <div className="relative w-[40%]">
          <Image
            src={heroImage}
            width={410}
            height={500}
            className="absolute h-[500px] w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
