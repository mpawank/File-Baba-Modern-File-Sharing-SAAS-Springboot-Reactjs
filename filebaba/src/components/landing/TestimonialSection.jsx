import React from "react";

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our users say
              <span className="text-indigo-600"> about File Baba</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Hear from our satisfied users who trust File Baba for their file
              sharing needs
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <svg
                      className="w-12 h-12 text-indigo-500 opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="mb-8">
                    <p className="text-lg text-gray-700 text-center leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </blockquote>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 h-14 w-14">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full border-2 border-indigo-100"
                      />
                    </div>
                    <div className="ml-4 text-center">
                      <h4 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
