import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">HARSHAL</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((ele) => {
            return (
              <Link
                to={ele.link}
                key={ele.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {ele.title}
              </Link>
            );
          })}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={()=> setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
}
