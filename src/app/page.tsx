import Hiragana from "@/components/hiragana";

const Home = () => {
  return (
    <section className="h-full bg-white -z-[99] rounded-xl shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 justify-center p-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Card Title
            </h1>
            <p className="text-gray-600">
              This is a well-designed card component with a clean layout and
              good color contrast.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Click Me
            </button>
          </div>

          <Hiragana />
        </div>
      </div>
    </section>
  );
};

export default Home;
