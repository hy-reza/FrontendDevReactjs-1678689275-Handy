import Card from "./Card";
import Filter from "./Filter";

const Content = () => {
  return (
    <>
      <Filter />
      <section className="flex flex-col">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button
          type="button"
          className="border w-full md:w-96 mx-auto border-blue-950 text-blue-950 font-semibold p-3 rounded-sm hover:text-white hover:font-normal hover:bg-blue-800 "
        >
          <p className="text-sm">LOAD MORE</p>
        </button>
      </section>
    </>
  );
};

export default Content;
