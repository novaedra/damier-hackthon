import React, { useState } from "react";
// import speechSynthesis from "speech-synthesis";

import "../../styles/components/sidebar.scss";
import "../../css/cube.css";

const Cube = () => {
  const [opened, setOpened] = useState(false);

  const toggleSidebar = () => {
    setOpened(!opened);
  };

  const links = [
    {
      name: "Achat",
      color: "vert",
      icon: "euro",
      dataFace: "show-front",
    },
    {
      name: "Commercial",
      color: "jaune",
      icon: "bar_chart",
      dataFace: "show-back",
    },
    {
      name: "R. Humaines",
      color: "rose",
      icon: "group",
      dataFace: "show-right",
    },
    {
      name: "Technique",
      color: "orange",
      icon: "settings_suggest",
      dataFace: "show-left",
    },
    {
      name: "Exploitation",
      color: "bleu",
      icon: "local_activity",
      dataFace: "show-top",
    },
    {
      name: "Environnement",
      color: "vert",
      icon: "eco",
      dataFace: "show-bottom",
    },
  ];

  function fade() {
    const Damier = document.getElementsByClassName("details");
    const title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
      title[i].style.display = "flex";
      Damier[i].style.display = "none";
    }
    setTimeout(details, 2000);
  }
    // Let's define a command.
   /* var commands = {
      "montre achat": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-front");
        fade();
        speechSynthesis("Voici le service achat", "fr-FR");
      },
      "montre commercial": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-back");
        fade();
        speechSynthesis("Voici le service commercial", "fr-FR");
      },
      "montre RH": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-right");
        fade();
        speechSynthesis("Voici le service resssources humaines", "fr-FR");
      },
      "montre meca": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-left");
        fade();
        speechSynthesis("Voici le service mecanique", "fr-FR");
      },
      "montre exploitation": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-top");
        fade();
        speechSynthesis("Voici le service exploitation", "fr-FR");
      },
      "montre environnement": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-bottom");
        fade();
        speechSynthesis("Voici le service environnement", "fr-FR");
      },
    };*/

    // Add our commands to annyang

    // Start listening.

  function cubeFace(target) {
    fade();
    const face = target.target.getAttribute("data-face");
    const cube = document.getElementById("cube");
    cube.className = "";
    cube.classList.add(face);
  }
  setTimeout(details, 2000);
  function details() {
    const Damier = document.getElementsByClassName("details");
    const title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
      title[i].style.display = "none";
      Damier[i].style.display = "flex";
    }
  }
  return (
    <div>
      <div
        className={`sidebar${opened ? " opened" : ""}`}
        onMouseEnter={toggleSidebar}
        onMouseLeave={toggleSidebar}
      >
        {links.map(({ name, color, icon, dataFace }, index) => (
          <a
           key={index}
           style={{ cursor: "pointer" }}
           data-face={dataFace}
           onClick={cubeFace}
          >
            <i className={`material-icons ${color}`}>{icon}</i>
            {name}
          </a>
        ))}
      </div>
      <div className="page">
        <section className="container">
          <div id="cube">
            <figure className="front title">
              <h1>Achat</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="front details">
              <div className="cart cube1"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube3"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube5"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube7"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube9"></div>
            </figure>
            <figure className="back title">
              <h1>Commercial</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="back details">
              <div className="cart cube10"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube11"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube12"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube13"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube14"></div>
            </figure>
            <figure className="right title">
              <h1>R H</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="right details">
              <div className="cart cube15"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube16"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube17"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube18"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube19"></div>
            </figure>
            <figure className="left title">
              <h1>Meca</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="left details">
              <div className="cart cube20"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube21"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube22"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube23"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube24"></div>
            </figure>
            <figure className="top title">
              <h1>Exploitation</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="top details">
              <div className="cart cube25"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube26"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube27"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube28"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube29"></div>
            </figure>
            <figure className="bottom title">
              <h1>Environement</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="bottom details">
              <div className="cart cube30"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube31"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube32"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube33"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube34"></div>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cube;
