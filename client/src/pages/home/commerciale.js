import React, { useEffect, useState } from "react";
import "../../styles/pages/commerciale.scss";
import Sidebar from "../../components/Sidebar";
import commercialAPI from "../../services/commercialAPI";

const Commerciale = () => {
  const [commercialeData, setCommercialeData] = useState(null);

  useEffect(() => {
    commercialAPI().then((res) => {
      setCommercialeData(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <Sidebar />

      {commercialeData && (
        <div id="commerciale">
          <div className="wrap_single">
            <div className="cube1"></div>
            <div className="cube2">
              <div className="arrow_top"></div>
              <p className="commerciale">Commerciale</p>
              <h2>Nombre réclamations</h2>
              <p className="number">{commercialeData.nbReclamations}</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube3"></div>
            <div className="cube4">
              <div className="arrow_left"></div>
              <p className="technique">Technique</p>
              <h2>Nombre de nouveaux abonnements</h2>
              <div className="text_damier">
                <p>{commercialeData.nbNouveauxAbonnements}</p>
                <button className="btn-voir">en voir plus...</button>
              </div>
            </div>
            <div className="cube5">
              <h2>Date : </h2>
              <input type="date" id="start" name="trip-start" />
            </div>
            <div className="cube6">
              <div className="arrow_right"></div>
              <p className="exploitation">Exploitation</p>
              <h2>Nombre de nouveaux partenaires</h2>
              <p>{commercialeData.nbNouveauxAbonnements}</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube7"></div>
            <div className="cube8">
              <div className="arrow_down"></div>
              <p className="ressources">Ressources humaines</p>
              <h2>Recette globale</h2>
              <p>{commercialeData.recetteGlobale} €</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube9"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Commerciale;
