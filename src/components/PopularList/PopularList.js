import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import "./PopularList.css"
const PopularList = () => {

  return (
  <div className="container row item2 col-md-12">
    <div className="flex"><h3>Popular Stores</h3></div><br/><br></br>
    <div className="row row-content">
      <div className="col col-sm-3 col-md-3">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Chinh's Store</Card.Title>
        </Card.Body>
      </Card>
      </div>
      <div className="col col-sm-3 col-md-3">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Chinh's Store</Card.Title>
        </Card.Body>
      </Card>
      </div>
      <div className="col col-sm-3 col-md-3">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Chinh's Store</Card.Title>
        </Card.Body>
      </Card>
      </div>
      <div className="col col-sm-3 col-md-3">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Chinh's Store</Card.Title>
        </Card.Body>
      </Card>
      </div>
      
      <div className="col col-sm-3 col-md-3">

      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Messi's Store</Card.Title>
        </Card.Body>
      </Card>
      </div>
      <div className="col col-sm-3 col-md-3">

      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Luffy's Store</Card.Title>
          
        </Card.Body>
      </Card>
      </div>

      <div className="col col-sm-3 col-md-3">

      <Card style={{ width: '16rem' }}>
        <Card.Img variant="bottom" style={{ width: '200 px' }} src="echbuon.png" />
        <Card.Body>
          <Card.Title>Naruto's Store</Card.Title>
          
        </Card.Body>
      </Card>
      </div>
      <div className="col col-sm-3 col-md-3">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="echbuon.png"/>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          
        </Card.Body>
      </Card>
      </div>

{/*        
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="echbuon.png"/>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          
         
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card> */}
    </div>
    
  </div>
  
    
     
  );
};

export default PopularList;