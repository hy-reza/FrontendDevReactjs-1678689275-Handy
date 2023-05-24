import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  name: string;
  pictureId: string;
  type: "Fast Food" | "Casual" | "Fine Dining" | "Cafes";
  rating: number;
  isOpen: boolean;
  priceRange: "Low" | "Medium" | "High";
  
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  pictureId,
  type,
  rating,
  isOpen,
  priceRange,
}) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="mb-3">
        <img
          src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
          alt="resto-pict"
          className="w-full object-cover h-40"
        />
      </div>
      <div className="w-full  h-14">
        <h2 className="text-xl font-medium line-clamp-2">{name}</h2>
        <p className="text-xs mt-1 text-gray-500">{type} Resto</p>
      </div>
      <div className="mt-2 mb-3">
        <StarRatings
          starDimension="15px"
          starSpacing="1px"
          rating={rating}
          starRatedColor="rgb(19,44,80)"
        />
      </div>
      <div className="flex justify-between mb-12 ">
        <p className="text-xs text-slate-400">
          <span
            className={
              priceRange === "High"
                ? "text-red-600"
                : priceRange === "Medium"
                ? "text-yellow-400"
                : "text-green-400"
            }
          >
            $
          </span>{" "}
          {priceRange} Price Range
        </p>
        <p className="text-xs text-slate-400">
          {isOpen ? "🟢 Open" : "🔴 Closed"}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        className="bg-blue-950 text-white w-full p-3 rounded-sm hover:bg-blue-800 focus:outline-none focus:bg-blue-800 active:bg-blue-900"
      >
        <p className="text-sm">LEARN MORE</p>
      </button>
    </div>
  );
};

export default Card;
