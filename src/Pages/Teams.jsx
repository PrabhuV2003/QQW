import React from "react";
import Banner from "../Components/Banner";
import { assets } from "../assets/assets";

const teamMembers = [
  {
    name: "Mr. Kaushik Punjani",
    image: "https://placehold.co/600x400",
    description:
      "Mr. Kaushik comes from well-known Gujarati business family and has rich and varied experience  in managing different businesses, in-depth knowledge of accounts & finance and has great  leadership and management ability to run an enterprise. His educational qualifications are B.Sc.  Chemistry and D. Pharmacy from Gujarat and Bombay Universities.",
  },
  {
    name: "Mr. Udayakumar Pechimuthu",
    image: "https://placehold.co/600x400",
    description:
      "Mr. Udayakumar has Board of Director and Management experience and expertise in many  corporates. He is currently acting as Director & Advisor in Corporates and advisor for Corporate  Bonds facilitation in Euro Exim Bank ltd. He has rich knowledge and work experience in Financial  Markets, Corporate Bonds, Securities and Board Management of companies.      His educational qualification is MBA from well renowned institution – IIM Bangalore and Bachelor  of Engineering from Anna University, Chennai.",
  },
  {
    name: "Mrs. Sivakumari Jagadeesan",
    image: "https://placehold.co/600x400",
    description:
      "Mrs. Sivakumari has in depth and extensive work experiences in managing Banking project  migrations, management consultancy, commercial banking, client onboarding, project  management and operations & strategy. Her educational qualification is BA & MBA from  University of Madras, Chennai.",
  },
];

const Teams = () => {
  return (
    <>
    <Banner img={assets.heroBg} />
    <section className="team-section">
      <h1 className="team-title">Our Teams</h1>
      <h3 className="team-subtitle">Directors of the Company</h3>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-row" key={index}>
            <div
              className={`team-card ${
                index % 2 === 0 ? "left-image" : "right-image"
              }`}
            >
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Teams;
