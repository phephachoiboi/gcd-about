import React from "react";
import "../App.css";
import SectionAbout from "./SectionAbout";
import SectionTeams from "./SectionTeams";

const AboutScenario = () => {
  return (
    <main className="flex flex-col m-0 p-0">
      <SectionAbout />
      <SectionTeams />
    </main>
  );
};
export default AboutScenario;
