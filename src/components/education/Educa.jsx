import React from "react";
import "./educa.css";

export const Educa = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="educa section" id="educa">
      <h2 className="section--title">Qualifications</h2>
      <span className="section--subtitle">My personal journey</span>
      <div className="educa--container container">
        <div className="educa--tabs">

          <div
            className={
              toggleState === 1
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-briefcase-alt educa--icon"></i>Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-graduation-cap educa--icon"></i>Education
          </div>

        </div>

        <div className="educa--sections">

          <div
            className={
              toggleState === 1
                ? "educa--content educa--content-active"
                : "educa--content"
            }
            >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">Software Developer Trainee</h3>
                <span className="educa--subtitle">
                  Pepcoding Education Pvt. Ltd.
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>Mar 2022 - Aug 2022
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">         
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">SDE Intern</h3>
                <span className="educa--subtitle">
                Codess.Cafe
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> July 2022- Aug 2022
                </div>
              </div>         
            </div> 

            <div className="educa--data">
              <div>
                <h3 className="educa--title">Women In Tech Head</h3>
                <span className="educa--subtitle">
                  Google Developer Student Club-BPIT
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2022-Jul 2023
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">         
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Open Source Contributor</h3>
                <span className="educa--subtitle">
                Hactoberfest
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2022
                </div>
              </div>         
            </div> 

          </div>

          <div
            className={
              toggleState === 2
                ? "educa--content educa--content-active"
                : "educa--content"
            }
          >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">High School Education(CBSE)</h3>
                <span className="educa--subtitle">
                  Smt. Misri Devi Gyan Niketan, New Delhi (Percentage- 95%)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2016 - 2017
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Senior Secondary Education(CBSE)</h3>
                <span className="educa--subtitle">
                  Govt. Co-Edu Senior Secondary School, New Delhi (Percentage- 88.60%)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2019
                </div>
              </div>
            </div>

            <div className="educa--data">
              <div>
                <h3 className="educa--title">Prepared For JEE Mains</h3>
                <span className="educa--subtitle">
                  FIITJEE, New Delhi
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2020
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Under-Graduation</h3>
                <span className="educa--subtitle">
                 Bhagwan Parshuram Institute Of Technology, New Delhi
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
