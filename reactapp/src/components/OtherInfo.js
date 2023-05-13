import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Select food category"
        value={formData.selectFoodCategory}
        onChange={(e) => {
          setFormData({ ...formData, selectFoodCategory: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Quantity of Veg items"
        value={formData.quantityOfVeg}
        onChange={(e) => {
          setFormData({ ...formData, quantityOfVeg: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Select Add-ons"
        value={formData.AddOnCategory}
        onChange={(e) => {
          setFormData({ ...formData, AddOnCategory: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;