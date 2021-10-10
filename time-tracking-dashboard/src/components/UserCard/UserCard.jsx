import React, { useState } from "react";
import UserImg from "../../assets/images/image-jeremy.png";
import "./UserCard.scss";

function UserCard() {
  const [activeFilter, setActiveFilter] = useState("daily");
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="user-img">
          <img src={UserImg} alt="" />
        </div>
        <div className="card-info">
          <div className="report-for">Report for</div>
          <div className="user-name">
            <div className="first-name">Jeremy</div>
            <div className="last-name">Robson</div>
          </div>
        </div>
      </div>
      <div className="card-filters">
        <ul>
          <li
            className={`${activeFilter === "daily" ? "isActive" : ""}`}
            onClick={() => {
              setActiveFilter("daily");
            }}
          >
            Daily
          </li>
          <li
            className={`${activeFilter === "monthly" ? "isActive" : ""}`}
            onClick={() => {
              setActiveFilter("monthly");
            }}
          >
            Monthly
          </li>
          <li
            className={`${activeFilter === "yearly" ? "isActive" : ""}`}
            onClick={() => {
              setActiveFilter("yearly");
            }}
          >
            Yearly
          </li>
        </ul>
      </div>
    </div>
  );
}

export { UserCard };
