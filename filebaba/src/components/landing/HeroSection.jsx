import React from "react";
import dashboardImg from "../../assets/dashboard.png";

const HeroSection = ({ openSignIn, openSignUp }) => {
  return (
    <div className="relative landing-page-content">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-80 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-40 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Share Files Securely</span>
            <span className="block text-purple-600">with File Baba</span>
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg md:mt-6 md:text-xl max-w-2xl mx-auto">
            Upload, manage, and share your files with ease. Experience the
            simplicity and speed of File Baba.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-white bg-purple-600 hover:bg-purple-700 text-lg font-medium rounded-md shadow-md transition duration-200" onClick={() => {
              openSignUp();
              // Optionally navigate to a different page or perform other actions
              // navigate('/signup');
            }}>
              Get Started
            </button>
            <button className="px-8 py-3 text-white bg-purple-500 hover:bg-purple-600 text-lg font-medium rounded-md shadow-md transition duration-200 " onClick={() => {
              openSignIn();
              // Optionally navigate to a different page or perform other actions
              // navigate('/signin');
            } }>
              Sign In
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="rounded-xl shadow-xl overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={dashboardImg}
              alt="File sharing interface"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-base text-gray-500">
            All your files in one place. Fast, secure, and easy to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
