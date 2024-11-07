import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-slate-50 min-h-screen text-font-base">
      <h1 className="font-geist font-thin text-5xl text-font-base">
        Lucky Lucas
      </h1>
      <Image
        src={"/heart.png"}
        width={200}
        height={200}
        alt="ballpen"
        className="mix-blend-multiply"
      />
      <div>
        <Link href={"/appointment"}>Make apointment</Link>
      </div>
    </div>
  );
}
