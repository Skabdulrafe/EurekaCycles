import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">
          About Eureka Cycles
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At <span className="font-semibold">Eureka</span>, we believe cycling is more
          than just transportation—it’s a lifestyle, a passion, and a commitment to
          healthier living. Since our inception, Eureka has been pushing boundaries in
          innovation, performance, and design, making us one of the most trusted cycle
          brands.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          From rugged <span className="font-semibold">mountain bikes</span> to sleek{" "}
          <span className="font-semibold">city rides</span>, we engineer cycles that
          bring joy to every journey. With a focus on sustainability and cutting-edge
          technology, we strive to make every ride an unforgettable experience.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Join the Eureka community today and ride towards a greener, healthier
          tomorrow 🚴.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;