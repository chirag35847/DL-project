import React from "react";

const Home = () => {
  return (
    <div
      className="flex text-center justify-center items-center flex-col pt-[100px]"
      id="about"
    >
      <div className="inline z-10 w-[100%] md:container  font-bold uppercase txt-main mobile:text-[40px] lg:text-[50px] mobile:flex-col lg:flex-row">
      About<span className="txt-light ">&nbsp;Us</span>
      </div>
     
      <div className="z-10 mb-6 lg:mt-10 mobile:mt-10">
        <div className="txt-ternary-light capitalize md:w-[60%] mobile:w-[85%] mx-auto lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
          <div>
          Welcome to RelaxiMate, your trusted companion in navigating the complexities of mental health and well-being. We understand that the journey through life, especially as a teenager, can be filled with its fair share of challenges, from anxiety and depression to moments of worry and panic. That's why we're here – to lend a virtual hand and a listening ear whenever you need it most.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
