
export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "App Developer",
      message: "Products Hub has an amazing collection of apps. Easy to find and download!",
      rating: 5
    },
    {
      name: "Jane Smith",
      role: "Designer",
      message: "I love the interface and simplicity. The features section really helped me pick the best apps quickly.",
      rating: 4
    },
    {
      name: "Alex Johnson",
      role: "Entrepreneur",
      message: "Highly secure and fast downloads. Definitely my go-to place for apps.",
      rating: 5
    }
  ];

  return (
    <section className="text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-300 mb-12 text-lg">Hear from people who love using Products Hub</p>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="p-6 shadow-white hover:shadow-lg duration-150 rounded-xl shadow">
              <p className="text-gray-200 mb-4">"{t.message}"</p>              

              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
