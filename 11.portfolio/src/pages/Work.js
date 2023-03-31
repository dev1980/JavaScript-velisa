import React from "react";
import { FaGithub } from "react-icons/fa";
import tribute from "../assets/tribute.jpg";
import calc from "../assets/calc.png";
import map from "../assets/map.jpg";
import randomquote from "../assets/random-quote-machine.png";
import wiki from "../assets/wiki.png";
import TicTacToe from "../assets/tic-tac-toe.png";

import "../style/Work.css";
const Work = () => {
  return (
    <div className="project">
      <div className="project__wrapper">
        <h2 className="project__h1">These are some of my projects</h2>
        <div className="project__grid">
          <div className="project__item">
            <img src={tribute} className="image" alt="Tribute page" />
            <div className="project__title">
             <p>
              <span className="code">&lt;</span>
              <a href="#">Tribute page- Live View</a>
              <span className="code">/&gt;</span>
            </p>
            <a href="#">
              <FaGithub />
            </a>
            </div>
          </div>

          <div className="project__item">
            <img src={randomquote} className="image" alt="Tribute page" />
            <div className="project__title">
            <p>
              <span className="code">&lt;</span>
              <a href="#">Random Quote- Live View</a>
              <span className="code">/&gt;</span>
            </p>
            <a href="#">
              <FaGithub />
            </a>
            </div>
          </div>

          <div className="project__item">
            <img src={calc} className="image" alt="Tribute page" />
            <div className="project__title">
            <p>
              <span className="code">&lt;</span>
              <a href="#">JS Calculator- Live View</a>
              <span className="code">/&gt;</span>
            </p>
            <a href="#">
              <FaGithub />
            </a>
            </div>
          </div>

          <div className="project__item">
            <img src={map} className="image" alt="Tribute page" />
            <div className="project__title">
            <p>
              <span className="code">&lt;</span>
              <a href="#">Map Data- Live View</a>
              <span className="code">/&gt;</span>
            </p>
            <a href="#">
              <FaGithub />
            </a>
            </div>
          </div>

          <div className="project__item">
            <img src={wiki} className="image" alt="Tribute page" />
            <div className="project__title">
            <p>
              <span className="code">&lt;</span>
              <a href="#">Wikipedia- Live View</a>
              <span className="code">/&gt;</span>
            </p>
            <a href="#">
              <FaGithub />
            </a>
            </div>
          </div>

          <div className="project__item">
            <img src={TicTacToe} className="image" alt="Tribute page" />
            <div className="project__title">
            <p>
              <span className="code">&lt;</span>
              <a href="#">TicTacToe- Live View</a>
              <span className="code">/&gt;</span>
            </p>
            <a href="#">
              <FaGithub />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
