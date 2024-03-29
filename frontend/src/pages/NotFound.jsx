import { Link } from "react-router-dom";
import {HiArrowNarrowRight} from "react-icons/hi"

export default function NotFound() {
  return (
    <div>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFount" />
          <h1>LOOKS LIKE YOU'RE LOST</h1>
          <p>we can't seem to find you the page you're looking for</p>
          <Link to="/">Back To Home <span><HiArrowNarrowRight/></span></Link>
        </div>
      </section>
    </div>
  )
}
