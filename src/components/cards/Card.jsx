import React from "react";
import "./card.css";


import admin from "../../assets/admin.png";
import image from "../../assets/image.png";
import job from "../../assets/job.png";
import customizer from "../../assets/customizer.png"

export const Card = () => {
  return (
    <section className="card section" id="card">
      <div className="card--container container">
        <h2 className="section--title">Projects</h2>
        <span className="section--subtitle">Works I've done</span>

        <div className="cards--container container">

          <article className="card--item">
            <div className="card--item-image">
              <img src={admin} alt="" srcset="" />
            </div>
            <h3>Admin-Dashboard</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/anamikarawat2305/Admin-Dashboard"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://admin-frontend-8w98.onrender.com/" className="btn" target="_blank">Demo</a>
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={image} alt="" srcset="" />
            </div>
            <h3>Image Generator</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/anamikarawat2305/Image-gen"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://image-gen-eight.vercel.app/" className="btn" target="_blank">Demo</a>
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={job} alt="" srcset="" />
            </div>
            <h3>JOB APP</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/anamikarawat2305/JOB-APP"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="exp://exp.host/@anamika_rawat/Job_App?release-channel=default" className="btn" target="_blank">Demo</a>
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={customizer} alt="" srcset="" />
            </div>
            <h3>Customizer</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/anamikarawat2305/Customize"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://customize-one.vercel.app/" className="btn" target="_blank">Demo</a>
              </div>
            </div>
          </article>

{/* ADD MORE PROJECTS */}

        
        </div>
      </div>
    </section>
  );
};
