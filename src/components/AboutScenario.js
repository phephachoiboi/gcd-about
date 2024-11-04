import React from "react";
import "../App.css";
import SectionAbout from "./SectionAbout";
import SectionTeams from "./SectionTeams";
import SectionSlogan from "./SectionSlogan";
import SectionVision from "./SectionVision";

const AboutScenario = () => {
  return (
    <main className="flex flex-col m-0 p-0">
      <SectionAbout />
      <SectionTeams />
      <SectionSlogan />
      <SectionVision />
    </main>
  );
};
export default AboutScenario;
