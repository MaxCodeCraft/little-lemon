import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="flex w-screen justify-center bg-white py-10">
      <div className="flex w-11/12 flex-col lg:w-full lg:max-w-5xl lg:flex-row">
        <div className="flex h-96 w-full flex-col justify-around py-8 lg:h-auto lg:w-1/2">
          <div className="flex flex-col font-markazi">
            <h1 className="text-7xl font-medium text-primaryYellow">
              About us
            </h1>
            <h3 className="text-4xl">Grandma would be proud!</h3>
          </div>
          <p className="rounded-2xl bg-primaryGreen p-4 font-medium text-white lg:w-96">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            minima fugiat omnis nesciunt voluptate rerum veritatis sequi quidem
            temporibus nobis, laboriosam, inventore dicta, reiciendis officiis
            qui similique quod nemo deleniti?
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={"/static/img/marioadrian.png"}
            width={500}
            height={500}
            alt="Images of the restaurant exterior and the two chiefs"
          />
        </div>
      </div>
    </div>
  );
}
