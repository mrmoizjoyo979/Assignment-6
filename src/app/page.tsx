export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[40px] px-8 py-40 font-sans text-black/25">
          PROJECT
          <br />
          <b className="text-black">Lorum</b>
        </h1>
        <img
          className="px-7 "
          src="Rectangle 6.png"
          alt="Pic"
          height={200}
          width={545}
        ></img>
      </div>

      <div className="bg-gray-50 flex py-7">
        <div className="px-5">
          <img className="h-30 w-70" src="/Rectangle 8.png" alt="pic"></img>
          <img
            className="py-1  h-78 w-70"
            src="Rectangle 10.png"
            alt="pic"
          ></img>
        </div>
        <div>

          



        <div className="flex py-7">
          <img className=" h-40 w-30" src="Rectangle 9.png" alt="pic"></img>
          <div className="">
          <h1 className="text-black/25 px-5 font-sans text-3xl">
            About
          </h1>

          <h1 className="py-2 px-5 font-sans text-black text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
