export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-slate-50 min-h-screen text-font-base">
      <h1 className="font-indieFlower text-5xl">Lucky Lucas</h1>
      <div className="overflow-hidden">
        <div className="relative font-indieFlower bg-slate-950 z-50 text-slate-50 px-4 hover:text-lckyred py-2 rounded-md">
          make apointment
        </div>
        <div className="relative flex flex-row-reverse z-0 -top-10">
          <div className="relative bg-lckyred h-36 w-8 top-0 rounded-full"></div>
          <div className="relative bg-lckyred h-24 w-8 top-0 rounded-full"></div>
          <div className="relative bg-lckyred h-28 w-8 top-0 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
