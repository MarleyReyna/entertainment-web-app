import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sideButtons from "./buttons";
import logo from "../../assets/logo.svg";
import pfp from "../../assets/image-avatar.png";

const Header = () => {
  let location = useLocation();
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const pathName = location.pathname.substring(1);
    if (pathName === "") {
      setDisplay("home");
    } else {
      setDisplay(pathName);
    }
  }, [setDisplay, location.pathname]);

  return (
    <header>
      <img src={logo} alt="" className="logo" />
      <ul>
        {sideButtons.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.name === "home" ? "/" : "/" + item.name}
                className={display === item.name ? "button active" : "button"}
                onClick={() => setDisplay(item.name)}
              >
                <img src={item.img} alt=""></img>
              </Link>
            </li>
          );
        })}
      </ul>
      <img src={pfp} alt="" className="profile-img" />
    </header>
  );
};

export default Header;
