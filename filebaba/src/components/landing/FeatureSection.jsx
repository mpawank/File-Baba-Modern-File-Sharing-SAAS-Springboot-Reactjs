import React from "react";
import {
  ArrowUpCircle,
  Shield,
  Cloud,
  Lock,
  Wallet,
  FileText,
  Share2,
  CreditCard,
} from "lucide-react";

const FeatureSection = ({ features }) => {
  const renderIcon = (iconName, iconColor) => {
    const iconProps = { size: 28, className: iconColor };
    switch (iconName) {
      case "ArrowUpCircle":
        return <ArrowUpCircle {...iconProps} />;
      case "Shield":
        return <Shield {...iconProps} />;
      case "Cloud":
        return <Cloud {...iconProps} />;
      case "Lock":
        return <Lock {...iconProps} />;
      case "Wallet":
        return <Wallet {...iconProps} />;
      case "FileText":
        return <FileText {...iconProps} />;
      case "Share2":
        return <Share2 {...iconProps} />;
      case "CreditCard":
        return <CreditCard {...iconProps} />;
      default:
        return <FileText {...iconProps} />;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight drop-shadow-sm">
            Features of <span className="text-purple-500">File Baba</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make File Baba the best choice
            for secure file sharing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                {renderIcon(feature.iconName, feature.iconColor)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
