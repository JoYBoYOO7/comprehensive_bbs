import React from "react";
import Lottie from "react-lottie";
import comprehensivequizupdated from "../Assets/comprehensivequizupdated.json";
import { Link } from "react-router-dom";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: comprehensivequizupdated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#FCFAEE] to-[#E8F0FE] overflow-x-hidden">
      <div className="w-full md:w-1/2 flex mt-12 md:mt-20 flex-col items-center px-4 md:px-8">
        <div className="mt-8 flex justify-center">
          <h1 className="font-serif font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#FCCD2A] leading-tight text-center break-words">
            Introducing{" "}
            <span className="ml-2 text-[#006BFF] break-words">
              VIT | COMPREHENSIVE QUIZ(BBS 2025)
            </span>
          </h1>
        </div>
        <div className="mt-16 text-center">
          <blockquote className="font-serif text-base md:text-lg lg:text-xl italic text-[#333] border-l-4 border-[#006BFF] pl-4 bg-white/50 rounded-md py-4 px-5 shadow-md max-w-xl mx-auto">
            "Comprehensive exams: because memorizing 1600 questions is just what
            we call 'fun' at VIT!"
          </blockquote>
        </div>
        <div className="mt-16 text-center">
          <Link to="/instructions">
            <button className="w-52 md:w-56 rounded-lg px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg">
              Let's Get Started!
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default Home;
