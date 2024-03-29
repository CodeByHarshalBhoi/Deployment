import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Success() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to Home in {countdown} seconds....</h1>
          <Link to="/">Back to home</Link>
        </div>
      </section>
    </>
  );
}
