import React from 'react';
import './CardSkills.scss';

const CardSkills = () => {
  return (
    <div className="card-skills">
      <div className="card-skill">
        <img src="./imgs/html.svg" className="card-skill__img" alt="html_img"/>
        <h2 className="card-skill__title">
          I'm in love with HTML
        </h2>
        <p className="card-skill__text">
          Hypertext Markup Language (HTML)
          is the standard markup language
          for creating web pages and web applications.
        </p>
      </div>
      <div className="card-skill">
        <img src="./imgs/css.svg" className="card-skill__img" alt="css_img"/>
        <h2 className="card-skill__title">
          CSS is my best friend
        </h2>
        <p className="card-skill__text">
          Cascading Style Sheets (CSS) is a style sheet
          language used for describing the presentation of
          a document written in a markup language like HTML.
        </p>
      </div>
      <div className="card-skill">
        <img src="./imgs/javascript.svg" className="card-skill__img" alt="js_img"/>
        <h2 className="card-skill__title">
          JavaScript is my passion
        </h2>
        <p className="card-skill__text">
          JavaScript is a high-level, interpreted programming
          language. It is a language which is also characterized
          as dynamic, weakly typed, prototype-based and multi-paradigm.
        </p>
      </div>
    </div>
  )
};

export default CardSkills;
