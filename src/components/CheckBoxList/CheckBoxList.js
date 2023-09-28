import React, { useState } from "react";
import "./CheckBoxList.css";

const CheckBoxList = () => {
  const [checked, setChecked] = useState([]);
  const categories = ["Type Service", "Type Cloth"];
  const checkLists = [
    ["Dry Cleaning", "Wet Cleaning", "Laundry", "Instant Service", "Hand-Dry", "Wash & Fold"],
    ["Suede & Leather", "Shoes", "Furniture", "Clothes", "Helmets washing", "Special"]
  ];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <section
      className="p-5 w-100"
      style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
    >
      <div class="card text-black" style={{ borderRadius: "25px" }}>
      <div class="card-body p-md-5">
        <div className="checked">{`Items checked are: ${checkedItems}`}</div>
        <div className="row">
  <div className="item1 col-md-4">
    {categories.map((category, categoryIndex) => (
      <div key={categoryIndex}>
        <div className="title">{category}</div>
        <div className="list-container">
          {checkLists[categoryIndex].map((item, index) => (
            <div className="items" key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  <div className="item2 col-md-7">
    <p>Các Shop.</p>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default CheckBoxList;
