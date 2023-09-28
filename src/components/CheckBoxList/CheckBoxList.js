import React, { useState } from "react";
import "./CheckBoxList.css";

const CheckBoxList = () => {
  const [checked, setChecked] = useState([]);
  const categories = ["Type Service", "Type Cloth"]; // Danh sách danh mục cho mỗi cột
  const checkLists = [
    ["Dry Cleaning", "Wet Cleaning", "Laundry","Instant Service","Hand-Dry","Wash & Fold"],
    ["Suede & Leather", "Shoes", "Furniture", "Clothes","Helmets washing","Special"]
  ]; // Danh sách các mục cho mỗi cột

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="CheckBoxList">
    
            
            <div className="checked">{`Items checked are: ${checkedItems}`}</div>
            <div className="container">
      <div className="row">
        <div className="col-md-4 item1">
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
        <div className="col-md-8">
          
            <p>Nội dung bên phải nằm ở đây.</p>
          
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CheckBoxList;
