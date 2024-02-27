import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import "./index.css";

const HomeNav = () => {
  const [homeNavActive, setHomeNavActive] = useState(0);
  return (
    <div className="home-nav-container">
      <div className="right">
        <p
          className={`${homeNavActive === 0 && "home-nav-active"}`}
          onClick={() => setHomeNavActive(0)}
        >
          Live
        </p>
        <p
          className={`${homeNavActive === 1 && "home-nav-active"}`}
          onClick={() => setHomeNavActive(1)}
        >
          Results
        </p>
        <p
          className={`${homeNavActive === 2 && "home-nav-active"}`}
          onClick={() => setHomeNavActive(2)}
        >
          History
        </p>
        <div className="home-nav-search-container">
          <CiSearch />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div
        className={`left ${homeNavActive === 3 && "home-nav-active"}`}
        onClick={() => setHomeNavActive(3)}
      >
        <button
          className={`create-btn ${homeNavActive === 3 && "home-nav-active"}`}
        >
          Create
        </button>
        <FaPlusSquare />
      </div>
    </div>
  );
};

export default HomeNav;