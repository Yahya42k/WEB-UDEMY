import React from "react";
import Contacts from "../contacts";

function Card(props){

  return<div>
 
  <div className="card">
    <div className="top">
      <h2 className="name">{props.name}</h2>
      <img className="circle-img"
        src={props.imgURL}
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p className="info">{props.phone}</p>
      <p className="info">{props.email}</p>
    </div>
  </div>
</div>
}

function App() {
  return <div>
 <h1 className="heading">My Contacts</h1>
  <Card  name="Beyonce"
  imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
  phone= "+123 456 789"
  email="b@beyonce.com" />
  <Card name={Contacts[1].name} imgURL={Contacts[1].imgURL} phone={Contacts[1].phone} email={Contacts[1].email} />
  <Card name={Contacts[2].name} imgURL={Contacts[2].imgURL} phone={Contacts[2].phone} email={Contacts[2].email} />
  </div>
}

export default App;
