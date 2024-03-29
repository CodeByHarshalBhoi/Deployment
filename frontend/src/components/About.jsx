import {Link} from "react-router-dom"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="yop">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serioud about food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            porro, error quae repellat atque quaerat accusantium pariatur
            consequuntur ab dolorum, ad est iure unde maxime veritatis
            reprehenderit? Beatae voluptatem iure atque laboriosam corporis.
            Quos aspernatur illo autem dolore fugit doloremque nisi fuga eaque,
            sit optio architecto vero accusantium dolor nulla!
          </p>
          <Link to={"/"}>Explore Menu<span><HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
            <img src="./about.png" alt="about" />
        </div>
      </div>
    </section>
  );
}
