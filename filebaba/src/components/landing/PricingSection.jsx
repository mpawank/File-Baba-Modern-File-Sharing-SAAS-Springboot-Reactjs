import React from "react";

const PricingSection = ({ pricingPlans, openSignIn, openSignUp }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
            <span className="text-indigo-600"> for everyone</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-indigo-500 ring-2 ring-indigo-200"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-5xl font-extrabold text-gray-900">
                    ₹{plan.price}
                  </span>
                  {plan.price !== "0" && (
                    <span className="text-xl text-gray-500">/month</span>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openSignUp()}
                className={`mt-8 w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-300 shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-300"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
