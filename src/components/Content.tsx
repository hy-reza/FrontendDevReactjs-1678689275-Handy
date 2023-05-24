import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import { retriveRestos } from "../redux/slices/restoSlices";
import { AppDispatch, RootState } from "../redux/store";

const Content = () => {
  const { restaurant, count, loading } = useSelector(
    (state: RootState) => state.resto
  );
  const [resto, setResto] = useState([...restaurant]);
  const [visibleItem, setVisibleItem] = useState(8);
  const [filter, setFilter] = useState({
    isOpen: "",
    priceRange: "",
    type: "",
    clear: false,
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(retriveRestos());
  }, [dispatch, resto]);

  useEffect(() => {
    dispatch(retriveRestos());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      setResto((prev) =>
        prev.filter((restaurant) => {
          // Filter berdasarkan isOpen
          if (filter.isOpen && !restaurant.isOpen) {
            return false;
          }

          // Filter berdasarkan priceRange
          if (
            filter.priceRange !== "" &&
            restaurant.priceRange !== filter.priceRange
          ) {
            return false;
          }

          // Filter berdasarkan type
          if (filter.type !== "" && restaurant.type !== filter.type) {
            return false;
          }

          // Restoran melewati semua filter
          return true;
        })
      );
    }
  }, [dispatch, filter, restaurant]);

  useEffect(() => {
    if (filter.clear) {
      setResto(restaurant);
      setVisibleItem(8);
    }
  }, [filter]);
  console.log({visibleItem, restoLen : resto.length, restaurant, count})


  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <section className="flex flex-col">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          {restaurant?.length == 0 && loading
            ? "loading"
            : resto
                .slice(0, visibleItem)
                .map((r) => (
                  <Card
                    key={r.name}
                    id={r.id}
                    isOpen={r.isOpen}
                    name={r.name}
                    rating={r.rating}
                    type={r.type}
                    pictureId={r.pictureId}
                    priceRange={r.priceRange}
                  />
                ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setVisibleItem((prev) => prev + 8);
          }}
          className={`border w-full md:w-96 mx-auto border-blue-950 text-blue-950 font-semibold p-3 rounded-sm hover:text-white hover:font-normal hover:bg-blue-800 ${
            visibleItem >= count &&
            visibleItem >= resto.length &&
            resto.length <= visibleItem &&
            resto.length < visibleItem &&
            "hidden"
          }`}
        >
          <p className="text-sm">LOAD MORE</p>
        </button>
      </section>
    </>
  );
};

export default Content;
