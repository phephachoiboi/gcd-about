import React from "react";
import "../App.css";
import SectionAbout from "./SectionAbout";
import SectionTeams from "./SectionTeams";
import SectionSlogan from "./SectionSlogan";

const AboutScenario = () => {
  return (
    <main className="flex flex-col m-0 p-0">
      <SectionAbout />
      <SectionTeams />
      <SectionSlogan />
    </main>
  );
};
export default AboutScenario;
