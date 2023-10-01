import React, { useState } from "react";
import "./CheckBoxList.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

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
        <div className="row">
  <div className="item1 col-md-3">
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
    ))
    }
    <br></br>
            <div className="checked">{`Items checked are: ${checkedItems}`}</div>
  </div>
  <div className="row item2 col-md-9">
    {/* <div className=" item2-1 col-md-12">
    <div className="item2-2 col-md-3"></div>
    <div className="item2-2 col-md-3"></div>
    <div className="item2-2 col-md-3"></div>
    <div className="item2-2 col-md-3"></div>

    </div>
    <div className="row col-md-12">
    <div className="item2-2 col-md-3"></div>
    <div className="item2-2 col-md-3"></div>
    <div className="item2-2 col-md-3"></div>
    <div className="item2-2 col-md-3"></div> */}
    <div className="d-flex justify-content">
      
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Chinh's Store</Card.Title>
          <Card.Text>
          Giặt đồ như đánh cầu lông
          </Card.Text>
          <Button variant="primary">Go Shop</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Messi's Store</Card.Title>
          <Card.Text>
            Giặt đồ như đá banh vậy
          </Card.Text>
          <Button variant="primary">Go Shop</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Luffy's Store</Card.Title>
          <Card.Text>
           Tôi sẽ trở thành Vua giặt đồ 
          </Card.Text>
          <Button variant="primary">Go Shop</Button>
        </Card.Body>
      </Card>


       
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="echbuon.png"/>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
    
  </div>
  </div>
</div>
        </div>
        <div>vinhlon</div>
    </section>
  );
};

export default CheckBoxList;