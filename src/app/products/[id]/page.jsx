export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://smart-project-five.vercel.app/myproducts/${id}`
  );
  const data = await res.json();
  if (!data) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>
      <div className="bg-gray-900 p-5 rounded-lg">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
        <p className="text-gray-300 mb-4">{data.description}</p>
        <div className="text-gray-400 text-sm space-y-1">
          <p>Price: {data.price}</p>
        </div>
        <a
          href="/"
          className="inline-block mt-6 bg-white text-black px-4 py-2 rounded-md font-semibold"
        >
          ← Back
        </a>
      </div>
    </div>
  );
}
