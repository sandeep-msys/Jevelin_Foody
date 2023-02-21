import { Divider } from "antd";
import SubTeams from "./SubTeams/SubTeams";
import "./Team.scss";
const Team = () => {
  return (
    <div className="Team-container">
      <div className="team-heading-container">
        <h1 className="team-title">Our Team</h1>
        <Divider className="team-matter">is the best</Divider>
      </div>
      <SubTeams />
    </div>
  );
};

export default Team;
