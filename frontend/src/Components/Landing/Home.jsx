import React from "react";
import { Carousel } from "flowbite-react";
import { Link as Switch } from "react-router-dom";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";

function Home() {
  return (
    <div id="home" className="bg-[#f5f5f5]">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-[#333333] md:w-3/4 leading-snug">
                Bridging teams {" "}
                <span className="text-[#0F446E] leading-snug">
                together
                </span>
              </h1>
              <p className="text-[#333333] text-base mb-8">
                Stay connected and collaborate in real-time with our all-in-one platform.
              </p>
              <button className="btn-primary">
                <Switch to="/auth">Get Started</Switch>
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner2} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-[#333333] md:w-3/4 leading-snug">
                Collaborate On{" "}
                <span className="text-[#0F446E] leading-snug">The Go</span>
              </h1>
              <p className="text-[#333333] text-base mb-8">
                Mobile and desktop, stay productive everywhere.
              </p>
              <button className="btn-primary mr-1">Mobile</button>
              <button className="btn-primary">Desktop</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Home;
