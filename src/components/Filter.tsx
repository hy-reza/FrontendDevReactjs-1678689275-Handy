interface FilterProps {
  filter: {
    isOpen: string;
    priceRange: string;
    type: string;
    clear: boolean
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      isOpen: string;
      priceRange: string;
      type: string;
      clear: boolean
    }>
  >;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  console.log(filter);
  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target; //event target destructuring

    setFilter((prev) => {
      //set State Value
      return {
        ...prev, //take prev state to new object
        [name]: value, // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
      };
    });
  }

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
              value={"open"}
              onChange={handleChange}
              name="isOpen"
              checked={filter.isOpen == "" ? false : true}
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              htmlFor="default-radio-1"
              className="ml-1 text-xs sm:text-sm"
            >
              Open Now
            </label>
          </div>
          <div className="flex items-center border border-x-0 border-t-0 border-b-2 pb-1 ">
            <select
              value={filter.priceRange}
              id="type"
              name="priceRange"
              onChange={handleChange}
              className="text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            >
              <option
                disabled={filter.priceRange == "" ? false : true}
                selected={filter.priceRange == "" ? true : false}
              >
                Price Range
              </option>
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Low"}>Low</option>
            </select>
          </div>
          <div className="flex items-center border-x-0 border-t-0 border-b-2 pb-1">
            <select
              id="type"
              name="type"
              onChange={handleChange}
              value={filter.type}
              className="text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            >
              <>
                <option
                  disabled={filter.type == "" ? false : true}
                  selected={filter.type == "" ? true : false}
                >
                  Restaurant Type
                </option>
                <option value={"Fast Food"}>Fast Food</option>
                <option value={"Casual"}>Casual</option>
                <option value={"Fine Dining"}>Fine Dining</option>
                <option value={"Cafes"}>Cafes</option>
              </>
            </select>
          </div>
        </div>
        <button
          onClick={() =>
            setFilter({
              isOpen: "",
              priceRange: "",
              type: "",
              clear: true
            })
          }
          className="border border-red-200 py-2 px-6 w-full mt-5 md:mt-0 xs:m-auto md:w-fit text-red-300 text-bold p-3 rounded-sm hover:bg-red-500 hover:text-white"
        >
          <p className="text-xs">CLEAR ALL</p>
        </button>
      </div>
      <hr />
    </section>
  );
};

export default Filter;
