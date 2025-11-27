import { FaRocket, FaMobileAlt, FaLock , FaCloudDownloadAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaRocket className="w-8 h-8 text-blue-600" />,
      title: "Fast & Reliable",
      description:
        "Download and use apps quickly without any lag or interruptions.",
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-blue-600" />,
      title: "Mobile Friendly",
      description: "All apps are optimized for mobile devices and tablets.",
    },
    {
      icon: <FaLock className="w-8 h-8 text-blue-600" />,
      title: "Secure",
      description:
        "All apps are tested for security and safety before listing.",
    },
    {
      icon: <FaCloudDownloadAlt className="w-8 h-8 text-blue-600" />,
      title: "Easy Downloads",
      description: "One-click download system for all apps.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Headline */}
        <h2 className="text-4xl font-bold mb-4">Why Choose Products Hub?</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Discover, download, and enjoy the best apps safely and easily.
        </p>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 shadow-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
