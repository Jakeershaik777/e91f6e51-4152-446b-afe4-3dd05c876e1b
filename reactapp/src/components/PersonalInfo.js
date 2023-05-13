//import React from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">

    

      <input
        type="text"
        placeholder="Address"
        value={formData.Address}
        onChange={(e) => {
          setFormData({ ...formData, Address: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter date of the event"
        value={formData.EnterDateOfEvent}
        onChange={(e) => {
          setFormData({ ...formData, EnterDateOfEvent: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter time of event"
        value={formData.EnterTimeOfEvent}
        onChange={(e) => {
          setFormData({ ...formData, EnterTimeOfEvent: e.target.value });
        }}
      />
        <input
        type="text"
        placeholder="Enter the number of people"
        value={formData.EnterNumberOfpeople}
        onChange={(e) => {
          setFormData({ ...formData, EnterNumberOfpeople: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;