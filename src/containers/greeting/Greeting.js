import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="50px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A student at{" "}
                  <mark data-entity="school">Princeton University</mark>{" "}
                  interested in <mark data-entity="field">AI/ML</mark>,{" "}
                  <mark data-entity="skill">Web Development</mark> and
                  <mark data-entity="skill">Entrepreneurship</mark>! I also play
                  a lot of video games and have gotten into{" "}
                  <mark data-entity="skill">Game Development</mark>
                  over the years! Check out my socials below:
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
