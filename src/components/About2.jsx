import React from "react";

const About2 = () => {
  return (
    <>
      <div className="h-[70vh] w-full bg-[#CDEA68] flex justify-between px-20 pt-7">
        <div>
          <h2 className="text-black text-5xl pt-10">Our approach !</h2>
          <button className="px-10 py-4 bg-black rounded-[30px] mt-8 text-lg">
            Read more
          </button>
        </div>

        <div className="img-div h-[90%] w-[50%] bg-purple-600 rounded-2xl bg-[url(./assets/image1.jpg)] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </>
  );
};

export default About2;
