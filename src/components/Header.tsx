import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <h1 className="text-5xl font-[400] mb-5 hover:text-blue-900"><Link to="/">Restaurants</Link></h1>
      <p className="text-sm font-light d-block md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati quidem
        perferendis dolores voluptate consectetur liberoblanditiis aliquid ipsa
        a eos delectus possimus magnam aliquam natus quam odit nesciunt.
      </p>
    </header>
  );
};

export default Header;
