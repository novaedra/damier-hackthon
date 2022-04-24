import React from "react";
import "../../styles/pages/home.scss";
import "../../styles/components/sidebar.scss";


// import BasicCard from "../../components/basicCard";

const HomePage = () => {
  function toggleSidebar() {
    console.log("opening sidebar");
    document.getElementById("mySidebar").classList.add("openSide");
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("mySidebar").style.position = "relative";
    document.getElementById("mySidebar").style.position.left = "215px";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  function sidebarLeave() {
    console.log("closing sidebar");
    document.getElementById("mySidebar").classList.remove("openSide");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("mySidebar").style.position = "relative";
    document.getElementById("mySidebar").style.position.left = "85px";

    // document.getElementById("main").style.marginLeft = "85px";
  }

  function hoverCard(a) {
    console.log(a);
    document.getElementById(a).classList.add("activeCard");
    document.querySelector(".filtre").style.display = "block";
  }

  function leaveCard(a) {
    console.log(a);
    document.getElementById(a).classList.remove("activeCard");
    document.querySelector(".filtre").style.display = "none";
  }
  return (
    <div className="wrap">
      <div
        id="mySidebar"
        className="sidebar"
        onMouseEnter={toggleSidebar}
        onMouseLeave={sidebarLeave}
      >
        <div className="gradient">
        </div>
        <div className="p-10">
          <div className="SDR">
            <p className="Hello">Hello Nathan!</p>
            <p className="Logout">Logout</p>
          </div>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardGreen")}
            onMouseLeave={() => leaveCard("CardGreen")}
          >
            <i className="material-icons vert">euro</i>Achat
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardYellow")}
            onMouseLeave={() => leaveCard("CardYellow")}
          >
            <i className="material-icons jaune">bar_chart</i>Commerciale
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardPurple")}
            onMouseLeave={() => leaveCard("CardPurple")}
          >
            <i className="material-icons rose">group</i>R. Humaines
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardOrange")}
            onMouseLeave={() => leaveCard("CardOrange")}
          >
            <i className="material-icons orange">settings_suggest</i>Technique
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardBleu")}
            onMouseLeave={() => leaveCard("CardBleu")}
          >
            <i className="material-icons bleu">local_activity</i>Exploitation
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardGreenLight")}
            onMouseLeave={() => leaveCard("CardGreenLight")}
          >
            <i className="material-icons vert">eco</i>Environnement
          </a>
        </div>
      </div>
      <div id="main"></div>
      <div className="right">
        <div className="card green" id="CardGreen">
          <i className="material-icons">euro</i>
          <h2>ACHAT</h2>
          <p>
            Estimation de la variation des recettes par comparaison à 2020 :{" "}
            <br></br>
            soit environ +3.7 M en cumulé à fin août
          </p>
        </div>
        <div className="card yellow" id="CardYellow">
          <i className="material-icons">bar_chart</i>
          <h2>COMMERCIALE</h2>
          <p>
            Estimation de la variation des recettes par comparaison à 2019 :
            <span> environ -3.7 M en cumulé à fin août</span>
          </p>
        </div>
        <div className="card purple" id="CardPurple">
          <i className="material-icons">group</i>
          <h2>
            RESSOURCES HUMAINES
          </h2>
          <p>
            Etre en conformité avec la réglementation : <br></br>
            <span> une priorité pour 88 % des décideurs SIRH et RH </span>
          </p>
        </div>
        <div className="card orange" id="CardOrange">
          <i className="material-icons">settings_suggest</i>
          <h2>TECHNIQUE</h2>
          <p>
            Voyages lignes régulières <br></br>
            <span>en 2021 : 26 821 899</span>
          </p>
        </div>
        <div className="card blue" id="CardBleu">
        <i className="material-icons">local_activity</i>
          <h2>EXPLOITATION</h2>
          <p>
            TCAR - Kilomètres métro haut le pied en 2021 : <br></br>48 170
          </p>
        </div>
        <div className="card greenLight" id="CardGreenLight">
          <i className="material-icons">eco</i>
          <h2>ENVIRONEMENT</h2>
          <p>
            Navette fluviale à énergie électro-solaire Nb de passagers en
            janvier 2021 : 6 563
          </p>
        </div>
      </div>
      <div className="IconRight">

      </div>
    </div>
  );
};

export default HomePage;
