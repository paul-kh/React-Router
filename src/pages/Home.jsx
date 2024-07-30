import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/**
         * The <Link> is different from <a> as <Link> is not sending
         * page load request to server at all.
         */}
        Go to <Link to="products"> the list of products </Link>.
      </p>
      <p>
        <button onClick={navigateHandler}> Go to Product Page</button>
      </p>
    </>
  );
}
