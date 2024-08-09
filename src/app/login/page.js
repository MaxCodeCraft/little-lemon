import Image from "next/image";
import lemonIcon from "@/assets/images/lemon-icon.png";

export default function Login() {
  return (
    <div className="flex h-[700px] w-screen items-center justify-center bg-primaryGreen">
      <div className="flex h-full w-full max-w-5xl py-32">
        <div className="flex w-1/2 items-center justify-center">
          <Image src={lemonIcon} width={200} height={500} />
        </div>
        <div className="flex w-1/2 flex-col justify-center gap-32">
          <h1 className="font-markazi text-7xl font-medium text-primaryYellow">
            Little Lemon
          </h1>
          <h3 className="text-4xl text-white">Page comming soon !</h3>
        </div>
      </div>
    </div>
  );
}
