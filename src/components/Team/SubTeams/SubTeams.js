import "./SubTeams.scss";
let SubTeamsData = [
  {
    image:
      "https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/michael-dam-258165.png",
    name: "Carol William",
    designation: "MANAGER",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices.",
  },
  {
    image:
      "https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/michael-dam-2581653.png",
    name: "Peter Lauren",
    designation: "BAR DIRECTOR",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices.",
  },
  {
    image:
      "https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/michael-dam-2581651.png",
    name: "Kate Fuson",
    designation: "HEAD CHEF",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices.",
  },
  {
    image:
      "https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/michael-dam-2581652.png",
    name: "Jack Fuson",
    designation: "WINE DIRECTOR",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices.",
  },
];
const SubTeams = () => {
  return (
    <div className="SubTeams-container">
      {SubTeamsData.map((item) => (
        <div className="each-sub-team" key={item.name}>
          <div className="team-image-container">
            <img src={item.image}  alt="/" className="team-image" />
          </div>
          <div className="team-matter-container">
            <p className="team-name">{item.name}</p>
            <h1 className="team-designation">{item.designation}</h1>
            <p className="team-matter">{item.matter}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubTeams;
