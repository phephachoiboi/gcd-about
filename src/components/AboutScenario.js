import React from "react";
import "../App.css";
import SectionAbout from "./SectionAbout";
import SectionTeams from "./SectionTeams";
import SectionSlogan from "./SectionSlogan";
import SectionVision from "./SectionVision";
import SectionMission from "./SectionMission";
import SectionClient from "./SectionClients";

const AboutScenario = () => {
  return (
    <main className="flex flex-col m-0 p-0 mx-0">
      <SectionAbout />
      <SectionTeams />
      <SectionSlogan />
      <SectionVision />
      <SectionMission />
      <SectionClient />
    </main>
  );
};
export default AboutScenario;
