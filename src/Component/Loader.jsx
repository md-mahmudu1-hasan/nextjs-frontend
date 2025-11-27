export default function Spinner() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
