import React, { useState } from "react";
import "./home.css";
import bdayData from "./data/bdayData";

export default function EventManagementHome() {
    const [data, setData] = useState(bdayData);
    const [searchText, setSearchText] = useState("");
  
    console.log("stategh", bdayData);
  
    function handleSearch(e) {
      setSearchText(e.target.value);
    }
  
    function handleRating(id, rating) {
      const updatedData = data.map((event) => {
        if (event.id === id) {
          return { ...event, rating };
        } else {
          return event;
        }
      });
      console.log(updatedData);
      setData(updatedData);
    }
  
    const filterEvents = data.filter((singleEvent) => {
      return singleEvent.name.toLowerCase().includes(searchText.toLowerCase());
    });
  
    const events = filterEvents.map((singleEvent) => {
      return (
        <div className="bday-card">
          <img height="200px" width="250px" src={singleEvent.imgUrl} alt="image" />
          <h2 className="event-name">{singleEvent.name}</h2>
          <div className="place-rating-container">
            <div className="">Place:{singleEvent.place}</div>
            <div className="">
              {[...Array(5)].map((_, i) => {
                const starRating = i + 1;
                const className = starRating <= singleEvent.rating ? "on" : "off";
                return (
                  <span
                    key={i}
                    className={className}
                    onClick={() => handleRating(singleEvent.id, starRating)}
                  >
                    &#9733;
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
    const rows = [];
    let currentRow = [];
    for (let i = 0; i < events.length; i++) {
      currentRow.push(events[i]);
      if ((i + 1) % 3 === 0 || i === events.length - 1) {
        rows.push(<div className="row" key={i}>{currentRow}</div>);
        currentRow = [];
      }
    }
    return (
      <div className="blue-background">
        <div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Type here to Search"
              name="searchText"
              value={searchText}
              onChange={handleSearch}
            />
            <button type="submit">Search</button>
          </div>
          <div className="grid-container">{events}</div>
        </div>
      </div>
    );
  }
  