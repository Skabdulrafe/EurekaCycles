import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Homepage_a() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-r from-white to-gray-100">
        {/* Left Content */}
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#343a40] leading-tight">
            Welcome to <span className="text-[#fd7e14]">Eureka Cycles</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Discover the future of eco-friendly rides. Our premium bicycles bring 
            performance, comfort, and adventure to your lifestyle.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to='/'>
                <motion.a
                href="#products"
                className="px-6 py-3 bg-[#fd7e14] text-white rounded-2xl shadow-lg hover:bg-[#e96b0c] transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Explore Bikes
                </motion.a>
            </Link>
            <Link to='/customersupport'>
                <motion.a
                href="#contact"
                className="px-6 py-3 bg-[#343a40] text-white rounded-2xl shadow-lg hover:bg-[#222529] transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Contact Us
                </motion.a>
            </Link>
          </div>
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          className="mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img  
            src="https://pngimg.com/uploads/bicycle/bicycle_PNG5391.png"
            alt="Eureka Cycle"
            className="w-72 md:w-96 drop-shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 text-gray-700 py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#343a40]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose <span className="text-[#fd7e14]">Eureka?</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Eco-Friendly",
              desc: "Reduce your carbon footprint with sustainable rides.",
            },
            {
              title: "Performance",
              desc: "Engineered for speed, comfort, and durability.",
            },
            {
              title: "Adventure Ready",
              desc: "Perfect companion for city streets & mountain trails.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#343a40]">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* card section */}
      <section className="bg-gray-50 text-gray-700 py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#343a40]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Mountain Bike",
              desc: "Conquer any terrain with our rugged mountain bikes.",
              img: "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw50914acb/Products/FLANKER/DC/fLANKER%20DC.png?sh=523&sfrm=png",
            },
            {
              title: "Road Bike",
              desc: "Experience speed and agility on paved roads.",
              img: "https://stryderbikes.com/cdn/shop/files/Jungle_Cruise_700C_Blk_Sage_Grn_990x.jpg?v=1714379023",
            },
            {
              title: "Hybrid Bike",
              desc: "The perfect blend of comfort and performance.",
              img: "https://choosemybicycle.com/cdn/shop/files/firefox-gypsy-new_eaec8350-931e-4a7c-a99c-c57e7027830c_5000x.png?v=1752038027",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <img src={feature.img} alt={feature.title} className="w-full h-48 object-contain rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-[#343a40]">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Call to Action */}
      <motion.section
        className="py-16 text-center bg-[#343a40] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">
          Ride into the Future with <span className="text-[#fd7e14]">Eureka 🚴</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Join thousands of happy riders today and experience cycling like never before.
        </p>
        <a
          href="#signup"
          className="mt-6 inline-block px-8 py-3 bg-[#fd7e14] text-white font-semibold rounded-2xl shadow-md hover:bg-[#e96b0c] transition"
        >
          Get Started
        </a>
      </motion.section>
    </div>
  );
}