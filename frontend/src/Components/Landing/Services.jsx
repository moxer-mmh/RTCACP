import React from "react";

function Services() {
  return (
    <div id="service" className="bg-[#f5f5f5]">
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ">
        <div className=" text-center my-8">
          <h2 className="text-4xl font-bold text-[#333333] mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-[#fbfbfb] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                Chat Features
              </h3>
              <p className="text-[#333333]">
                Chat with your team members in real-time.
              </p>
            </div>
            <div className="bg-[#fbfbfb] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                Soon.....
              </h3>
              <p className="text-[#333333]">Soon.....</p>
            </div>
            <div className="bg-[#fbfbfb] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                Soon.....
              </h3>
              <p className="text-[#333333]">Soon.....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
