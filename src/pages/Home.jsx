import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to my Food Ordereing App</h1>
      <Link to="/menu">
        <button>Go to Menu</button>
      </Link>
    </>
  );
};

export default Home;
