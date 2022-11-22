import React from "react";
import Card from "react-bootstrap/Card";
import  {AiOutlineHeart}  from "react-icons/ai";


function BasicExample() {
  return (
    // <div>
    //   <div/>
    <Card style={{ width: "20rem", height: "24rem" }}>
      <Card.Img
        variant="bottom"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO12C-UrBMINUZVZF4J2E7tGIkvcfsLO228BUNsBb-vmbZz8_sGpDj3EkeENjJbljge9k&usqp=CAU"
      />
      <Card.Body>
        <spam/>
      <AiOutlineHeart style={{marginLeft:'280px' ,top : '80px' , backgroundPosition:'20px'}}/><Card.Text>CAR MG 1.8 UG 2022</Card.Text>
        {/* <Card.Title>suzuki ssj sjhui</Card.Title> */}
        
        <Card.Title>409090$</Card.Title>

        <Card.Text>DHA Phase 8,karachi 3 week ago</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
