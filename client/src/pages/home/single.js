import React from "react";
import "../../styles/pages/single.scss";
const Single = () => {
 

  return (

    <>
   


    <div className="wrap_single">
        <div className="cube1"></div>
        <div className="cube2">
        <div className="arrow_top"></div>
        <p className="commerciale">Commerciale</p>
          <h2>commande passées</h2>
          <p className="number">148 634</p>
          <button className="btn-voir">en voir plus...</button>
        </div>
        <div className="cube3"></div>
        <div className="cube4">
        <div className="arrow_left"></div>
          <p className="technique">Technique</p>
          <h2>Statistiques 2</h2>
          <div className="text_damier"><p>Lorem ipsum dolor sit amet, consectetur adipising elit.  consectetur adipising elit. </p>
          <button className="btn-voir">en voir plus...</button>
          </div>
        </div>
        <div className="cube5">
          <h2>Date : </h2>
        <input type="date" id="start" name="trip-start"/>
        </div>
        <div className="cube6">
        <div className="arrow_right"></div>
        <p className="exploitation">Exploitation</p>
        <h2>Statistiques 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipising elit.  consectetur adipising elit. </p>
          <button className="btn-voir">en voir plus...</button>
        </div>
        <div className="cube7"></div>
        <div className="cube8">
          <div className="arrow_down"></div>
          <p className="ressources">Ressources humaines</p>
        <h2>Statistiques 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipising elit.  consectetur adipising elit. </p>
          <button className="btn-voir">en voir plus...</button>
        </div>
        <div className="cube9"></div>
      
     
    </div>
    </>
    
  );
};

export default Single;
