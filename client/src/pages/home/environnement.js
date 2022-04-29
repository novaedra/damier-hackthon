import React, { useEffect, useState } from "react";
import "../../styles/pages/environnement.scss";
import Sidebar from "../../components/Sidebar";
import quality_environmentAPI from "../../services/quality_environmentAPI";

const Environnement = () => {
  const [environnementData, setEnvironnementData] = useState(null);

  useEffect(() => {
    quality_environmentAPI().then((res) => {
      setEnvironnementData(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <Sidebar />

      {environnementData && (
        <div id="environnement">
          <div className="wrap_single">
            <div className="cube1"></div>
            <div className="cube2">
              <div className="arrow_top"></div>
              <p className="commerciale">Commerciale</p>
              <h2>Signalements qualité/environnement</h2>
              <p>{environnementData.nbSignalementsQualiteEnvironement}</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube3"></div>
            <div className="cube4">
              <div className="arrow_left"></div>
              <p className="exploitation">Exploitation</p>
              <h2>Impact Carbone</h2>
              <div className="text_damier">
                <p>{environnementData.impactCarbone} KG CO2</p>
                <button className="btn-voir">en voir plus...</button>
              </div>
            </div>
            <div className="cube5">
              <h2>Date : </h2>
              <input type="date" id="start" name="trip-start" />
            </div>
            <div className="cube6">
              <div className="arrow_right"></div>
              <p className="technique">Technique</p>
              <h2>Incidents Environnementaux</h2>
              <p>{environnementData.incidentsEnvironnementaux}</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube7"></div>
            <div className="cube8">
              <div className="arrow_down"></div>
              <p className="ressources">Ressources humaines</p>
              <h2>Budget Environnement</h2>
              <p>{environnementData.budgetEnvironnement} €</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube9"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Environnement;
