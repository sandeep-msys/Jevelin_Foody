import "./SubAbouts.scss";
let SubAboutsData = [
  {
    image:
      "https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/picture3.png",
    title: "Always ",
    title_light: "Fresh",
    matter:
      "Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat.",
  },
  {
    image:
      "https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/picture2.png",
    title: "Eco ",
    title_light: "Products",
    matter:
      "Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat.",
  },
  {
    image:
      "https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/picture1.png",
    title: "Healthy ",
    title_light: "Deserts",
    matter:
      "Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat.",
  },
];
const SubAbouts = () => {
  return (
    <div className="SubAbouts-container">
      {SubAboutsData.map((item) => (
        <div className="each-subabout-container">
          <div className="each-image-container">
            <img src={item.image} alt="/" className="each-image" />
          </div>
          <h1 className="each-header">
            {item.title}
            <spam className="light-header">{item.title_light}</spam>
          </h1>
          <p className="each-matter">{item.matter}</p>
        </div>
      ))}
    </div>
  );
};

export default SubAbouts;
