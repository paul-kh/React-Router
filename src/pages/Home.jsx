import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/**
         * The <Link> is different from <a> as <Link> is not sending
         * page load request to server at all.
         */}
        Go to <Link to="/products"> the list of products </Link>.
      </p>
    </>
  );
}
