import React from "react";

const About = () => {
  return (
    <>
      <div className="main h-screen w-full bg-[#CDEA68]">
        <div className="first h-[50%] w-full">
          <h2 className="pt-24 pl-20 text-[3vw] text-black">
            Ochi is a stratgic partner for fast growing tech <br />
            businesses that needs to <span>raise funds </span>,{" "}
            <span>sell products </span>, <br />{" "}
            <span>explain complex ideas </span>, and{" "}
            <span>hire great people.</span>
          </h2>
        </div>

        <div className="second h-[50%] w-full border-[1px] border-zinc-500 flex justify-between px-10 pt-7 text-black text-lg">
          <h3>What you can expect !</h3>

          <div className="w-[23%] flex flex-col gap-14">
            <h3>We create tailored Presentation to help you persuade your colleagues , clients , or investors. Whether it's live or digital , delivered for one or a hundred people.</h3>
            <h3>We belive the mix of strategy and design (with a bite of coffe) is what makes your message clear , convincing , and captivating.</h3>
          </div>

          <div className="krishna self-end pb-22 pr-20 underline">
            <h3>Instagram</h3>
            <h3>Behance</h3>
            <h3>Facebook</h3>
            <h3>Linkedin</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

