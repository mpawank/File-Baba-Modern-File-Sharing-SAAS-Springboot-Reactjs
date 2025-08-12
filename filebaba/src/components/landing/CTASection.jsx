import React from "react";

const CTASection = ({ openSignIn, openSignUp }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block"> Ready to get started?</span>
          <span className="block text-blue-100">
            {" "}
            Create your account today{" "}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
              onClick={() => openSignUp()}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
