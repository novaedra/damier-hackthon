import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import "../../styles/pages/environnement.scss";
import Sidebar from "../../components/Sidebar";


const Environnement = () => {


 return (
  <>
   <Sidebar />

   <div id="environnement">
    <div className="wrap_single">
     <div className="cude_2d_1"></div>
     <div className="cude_2d_2">
      <h2>Statistique 1</h2>
      <FontAwesomeIcon icon={faLeaf} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
      <a className="arrow_top" href="/commerciale">
       <FontAwesomeIcon icon={faAnglesRight} className="icon" />
       <p className="commerciale">Commerciale</p>
      </a>
     </div>
     <div className="cude_2d_3"></div>
     <div className="cude_2d_4">
      <h2>Statistique 2</h2>
      <FontAwesomeIcon icon={faLeaf} className="icon" />
      <div className="text_damier"><p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur
       adipising elit. </p>
       <button className="btn-voir">en voir plus...</button>
       <a className="arrow_left" href="/exploitation">
        <FontAwesomeIcon icon={faAnglesRight} className="icon" />
        <p className="exploitation">Exploitation</p>
       </a>
      </div>
     </div>
     <div className="cude_2d_5">
      <h2>Date : </h2>
      <input type="date" id="start" name="trip-start" />
     </div>
     <div className="cude_2d_6">
      <h2>Statistique 3</h2>
      <FontAwesomeIcon icon={faLeaf} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
      <a className="arrow_right" href="/technique">
       <FontAwesomeIcon icon={faAnglesRight} className="icon" />
       <p className="exploitation">Technique</p>
      </a>
     </div>
     <div className="cude_2d_7"></div>
     <div className="cude_2d_8">
      <h2>Statistique 4</h2>
      <FontAwesomeIcon icon={faLeaf} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
      <a className="arrow_down" href="/ressources_humaines">
       <p className="ressources">Ressources humaines</p>
       <FontAwesomeIcon icon={faAnglesRight} className="icon" />
      </a>
     </div>
     <div className="cude_2d_9"></div>


    </div>
   </div>
  </>
 );
};

export default Environnement;