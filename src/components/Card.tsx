import StarRatings from "react-star-ratings";

const Card = () => {
  return (
    <div className="">
      <div className="mb-3">
        <img
          src="https://restaurant-api.dicoding.dev/images/medium/22"
          alt="resto-pict"
          className="w-full object-cover h-30"
        />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-medium line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta dolore, provident eum exercitationem officiis quisquam deserunt quam magnam consectetur?</h2>
      </div>
      <div className="mt-2 mb-3">
        <StarRatings
          starDimension="15px"
          starSpacing="1px"
          rating={3.5}
          starRatedColor="rgb(19,44,80)"
        />
      </div>
      <div className="flex justify-between mb-12 ">
        <p className="text-xs text-slate-400">THAI - $$$$$</p>
        <p className="text-xs text-slate-400">🟢 🔴CLOSED</p>
      </div>
      <button type="button" className="bg-blue-950 text-white w-full p-3 rounded-sm hover:bg-blue-800 focus:outline-none focus:bg-blue-800 active:bg-blue-900"><p className="text-sm">LEARN MORE</p></button>
    </div>
  );
};

export default Card;
