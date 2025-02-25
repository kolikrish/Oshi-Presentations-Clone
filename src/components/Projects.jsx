import React from "react";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";

const Projects = () => {


  return (
    <>
      <div className="w-full bg-zinc-900 py-20">

        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
          <h2 className="text-6xl tracking-tight">Featured Projects</h2>
        </div>

        <div className="px-20">

          <div className="cards-div w-full flex gap-10 mt-10">

                <div className="card-container w-1/2 h-[75vh] relative">
                  <h2 className="text-xl pb-5">Salience Labs</h2>
                  <div className="CARD w-full h-full bg-green-600 overflow-hidden rounded-xl">
                    <img
                      className="h-full w-full bg-cover bg-center rounded-xl"
                      src={Image3}
                      alt="Image here"
                    />
                  </div>

                  <div className="flex gap-5">
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                  </div>
                </div>

                <div className="card-container rounded-xl w-1/2 h-[75vh] relative">
                  <h2 className="text-xl pb-5">Cardboard Spaceship</h2>
                  <div className="CARD w-full h-full bg-green-600 overflow-hidden rounded-xl">
                    <img
                      className="h-full w-full bg-cover bg-center rounded-xl"
                      src={Image4}
                      alt="Image here"
                    />
                  </div>

                  <div className="flex gap-5">
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                  </div>
                </div>


          </div>


          <div className="cards-div w-full flex gap-10 my-36">

                <div className="card-container w-1/2 h-[75vh] relative">
                  <h2 className="text-xl pb-5">
                  AH2 & Matt Horn</h2>
                  <div className="CARD w-full h-full bg-green-600 overflow-hidden rounded-xl">
                    <img
                      className="h-full w-full bg-cover bg-center rounded-xl"
                      src={Image5}
                      alt="Image here"
                    />
                  </div>

                  <div className="flex gap-5 mt-6">
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                  </div>
                </div>

                <div className="card-container rounded-xl w-1/2 h-[75vh] relative">
                  <h2 className="text-xl pb-5">All Things Go</h2>
                  <div className="CARD w-full h-full bg-green-600 overflow-hidden rounded-xl">
                    <img
                      className="h-full w-full bg-cover bg-center rounded-xl"
                      src={Image6}
                      alt="Image here"
                    />
                  </div>

                  <div className="flex gap-5 mt-6">
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                      <button className="bg-zinc-600 px-7 py-1.5 mt-3 rounded-[15px]">Hello</button>
                  </div>
                </div>


          </div>


        </div>


      </div>
    </>
  );
};


export default Projects;