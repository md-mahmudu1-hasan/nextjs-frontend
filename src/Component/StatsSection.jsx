export default function StatsSection() {
  const stats = [
    { label: "Apps Uploaded", value: "1,200+" },
    { label: "Downloads", value: "50,000+" },
    { label: "Active Users", value: "8,500+" },
    { label: "5-Star Ratings", value: "4,800+" },
  ];

  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
        <p className="text-white mb-12">
          See why thousands of users trust Products Hub for their app needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-xl border border-gray-800 shadow p-6 hover:shadow-lg shadow-white  transition">
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
