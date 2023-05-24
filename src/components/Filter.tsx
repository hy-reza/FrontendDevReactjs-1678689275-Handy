const Filter = () => {
  return (
    <section className="filter mb-10">
      <hr />
      <div className="filter-box md:flex md:flex-row my-3 items-center justify-between">
        <div className="flex justify-between gap-3 items-center">
          <p className="text-xs sm:text-sm pb-1">Filter By : </p>
          <div className="flex items-center border-x-0 border-t-0 border-b-2 pb-1">
            <input
              id="default-radio-1"
              type="radio"
              // value={}
              name="default-radio"
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label htmlFor="default-radio-1" className="ml-1 text-xs sm:text-sm">
              Default radio
            </label>
          </div>
          <div className="flex items-center border border-x-0 border-t-0 border-b-2 pb-1 ">
            <select
              id="type"
              className="text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            >
              <>
                <option disabled={true} selected={true}>
                  Price
                </option>
                <option>Canteen</option>
                <option>Bukka</option>
                <option>Eatery</option>
              </>
            </select>
          </div>
          <div className="flex items-center border-x-0 border-t-0 border-b-2 pb-1">
            <select
              id="type"
              className="text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            >
              <>
                <option disabled={true} selected={true}>
                  Restaurant Type
                </option>
                <option>Canteen</option>
                <option>Bukka</option>
                <option>Eatery</option>
              </>
            </select>
          </div>
        </div>
        <button className="border py-2 px-6 w-full mt-5 md:mt-0 xs:m-auto md:w-fit text-gray-300 text-bold p-3 rounded-sm hover:bg-gray-300 hover:text-white">
          <p className="text-xs">CLEAR ALL</p>
        </button>
      </div>
      <hr />
    </section>
  );
};

export default Filter;
