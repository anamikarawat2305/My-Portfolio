import React from "react";
import "./about.css";
import aboutImg from "../../assets/about.jpg";
import resume from "../../assets/resume.pdf";
import { Infor } from "./Infor";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section--title">About me</h2>
      <span className="section--subtitle">My Introduction</span>

      <div className="about--container container grid">
        <img src={aboutImg} alt="" className="about--img" />
        <div className="about--data">
          <Infor />
          <p className="about--description">

            I am a FullStack Web developer, currently pursuing B.Tech in Computer Science from BPIT, Delhi. I am familiar with many frameworks like NodeJs, Express, ReactJs, Redux, etc. I have worked with databases like MongoDB and SQL and learned many programming languages like C++, Java and JavaScript. Moreover, I am proficient in using developer tools like Git, Github, VS Code and NPM packages, and in hosting with Netlify, Vercel, and Render. I love building real-world projects.
          </p>
          <a download="" href={resume} className="button button--flex">
            Download Resume
            <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
