import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="flex w-screen justify-center bg-white py-10">
      <div className="flex w-full max-w-5xl flex-wrap">
        <div className="flex w-1/2 flex-col justify-around py-8">
          <div className="flex flex-col font-markazi">
            <h1 className="text-7xl font-medium text-primaryYellow">
              About us
            </h1>
            <h3 className="text-4xl">Grandma would be proud!</h3>
          </div>
          <p className="w-96 rounded-2xl bg-primaryGreen p-4 font-medium text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            minima fugiat omnis nesciunt voluptate rerum veritatis sequi quidem
            temporibus nobis, laboriosam, inventore dicta, reiciendis officiis
            qui similique quod nemo deleniti?
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={"/test.png"}
            width={500}
            height={500}
            alt="Images of the restaurant exterior and the two chiefs"
          />
        </div>
      </div>
    </div>
  );
}
