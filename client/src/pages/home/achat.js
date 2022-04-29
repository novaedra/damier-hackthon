import React, { useEffect, useState } from "react";
import "../../styles/pages/achat.scss";
import Sidebar from "../../components/Sidebar";
import achatAPI from "../../services/achatAPI";

const Achat = () => {
  const [achatData, setAchatData] = useState(null);

  useEffect(() => {
    achatAPI().then((res) => {
      setAchatData(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <Sidebar />

      {achatData && (
        <div id="achat">
          <div className="wrap_single">
            <div className="cube1"></div>
            <div className="cube2">
              <div className="arrow_top"></div>
              <p className="commerciale">Achat</p>
              <h2>Nombre total de tickets vendus</h2>
              <p>{achatData.nbTotal}</p>

              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube3"></div>
            <div className="cube4">
              <div className="arrow_left"></div>
              <p className="technique">Technique</p>
              <h2>Nombre de tickets papier vendus</h2>
              <div className="text_damier">
                <p>{achatData.nbTicketsVendus}</p>
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
              <h2>Nombre de tickets SMS vendus</h2>
              <p className="number">{achatData.nbTicketsSMS}</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube7"></div>
            <div className="cube8">
              <div className="arrow_down"></div>
              <p className="ressources">Ressources humaines</p>
              <h2>Format le plus populaire</h2>
              <p>{achatData.ventePopulaire}</p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="cube9"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achat;
