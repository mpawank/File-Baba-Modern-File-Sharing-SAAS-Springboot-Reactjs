import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-400">
            &copy; 2025 FileBaba. All rights reserved.
          </p>
          <p className="mt-2 text-base text-gray-400">
            Made with ❤️ by{"  "}
            <a
              href="https://www.filebaba.com"
              className="text-gray-300 hover:text-white"
            >
              M Pawan Kumar ❤️❤️❤️
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
