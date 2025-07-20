import React from "react";

const Hero = () => {
  return (
    <>

      <div data-scroll data-scroll-section data-section-speed="-.8" className="bg-zinc-900 h-screen w-full pt-1">
        <div className="txtStructure mt-36 px-20">
          {["We create", "Eye opening", "Presentations"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <h1 className="uppercase text-8xl leading-none tracking-tighter">
                  {item}
                </h1>
              </div>
            );
          })}
        </div>


        <div className="border-t-[1px] border-zinc-700 mt-32 flex items-center justify-between px-20 py-5">
            {['For public and private companies', 'From the first pitch to IPO'].map((item , index) => {
                return (
                    <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
                )
            })}
            
            <div className="start px-5 py-2 border-[1px] border-zinc-600 cursor-pointer rounded-full">Start the Project</div>
        </div>

      </div>


      <div className="left bg-red-400 block absolute right-[0%] rotate-[270deg] top-[30%] p-3 rounded-xl">
        Site of the Day
      </div>

    </>
  );
};

export default Hero;