import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retriveResto } from "../redux/slices/restoSlices";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import StarRatings from "react-star-ratings";
import Card from "../components/Card";
import { Header } from "../components";
const Detail = () => {
  const { detail, restaurant } = useSelector((state: RootState) => state.resto);
  
  const { id } = useParams();
  const [resto, shuffle] = useState(
    [...restaurant].sort(() => 0.5 - Math.random()).filter(r => r.id != id)
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(retriveResto(id as string));
  }, [id, dispatch]);
  useEffect(() => {
    shuffle((prev) => prev.sort(() => 0.5 - Math.random()).filter(r => r.id != id));
  }, [id, dispatch]);

  return (
    <>
      <div className="sm:w-100 mx-6 my-6 md:w-2/3 md:mx-auto ">
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="">
            <div className="mx-auto flex flex-wrap">
              <Header />
              <img
                alt="resto"
                className="lg:w-1/2 w-full md:h-[500px] object-cover object-center rounded border border-gray-200"
                src={`https://restaurant-api.dicoding.dev/images/large/${detail.pictureId}`}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {detail.type} resto
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {detail.name}
                </h1>

                <StarRatings
                  starDimension="20px"
                  starSpacing="1px"
                  rating={detail.rating}
                  starRatedColor="rgb(19,44,80)"
                />
                <p className="leading-relaxed mt-5">{detail.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              </div>
              <h2 className="text-xl mt-10 title-font my-10 text-gray-900 tracking-widest">
                Recommended Resto
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10 m-auto w-full">
                {resto.slice(0, 4).map((r) => (
                  <Card
                    key={r.id}
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Detail;
