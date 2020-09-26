import React from "react";

const contacts = [
  {
    name: "Jimmy Page",
    imgURL:
      "https://i.dailymail.co.uk/1/2018/08/03/13/3841694-6015987-image-a-28_1533298148704.jpg",
    phone: "+123 456 789",
    email: "page@jimmy.com"
  },
  {
    name: "Bertram Gilfoyle",
    imgURL:
      "https://www.thewrap.com/wp-content/uploads/2018/04/GilfoyleSiliconValley.png",
    phone: "+987 654 321",
    email: "gilfoyle@piedpiper.com"
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgURL} alt=""></img>
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
export default Card;
export { contacts };
