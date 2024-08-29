import React, { useState } from "react";
import "./styles.css";
import searchImg from "./assets/search.png";
import Categorycard from "./components/categoryCard";
import Modal from "./components/modal";
import { useSelector } from "react-redux";

export default function App() {
  const categories = useSelector((state) => state.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Search, setSearch] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filterCards = categories.filter((item) =>
    item.name.toLowerCase().trim().includes(Search.trim())
  );

  return (
    <div className="App">
      <nav>
        <h1>Dashboard</h1>
        <div className="search-box">
          <img src={searchImg} alt="search" />
          <input
            type="search"
            placeholder="Search widgets.."
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </nav>
      <div className="dashboard">
        <div className="head-items">
          <h1>CNAPP Dashboard</h1>
          <div className="dashboard_feature">
            <button onClick={() => setIsModalOpen(true)}>Add Widget +</button>
            <button>refresh</button>
            <button>options</button>
          </div>
        </div>
        <div className="data-container">
          {Search.length > 0 && Search[0] !== " "
            ? filterCards.map((category, index) => {
                return (
                  <Categorycard
                    key={index}
                    catIndex={index}
                    name={category.name}
                    widgets={category.widgets}
                  />
                );
              })
            : categories.map((category, index) => {
                return (
                  <Categorycard
                    key={index}
                    catIndex={index}
                    name={category.name}
                    widgets={category.widgets}
                  />
                );
              })}
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
