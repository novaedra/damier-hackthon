import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import "../../styles/pages/commerciale.scss";
import Sidebar from "../../components/Sidebar";


const Commerciale = () => {


    return (
        <>
            <Sidebar />

            <div id="commerciale">
                <div className="wrap_single">
                    <div className="cude_2d_1"></div>
                    <div className="cude_2d_2">
                        <h2>commande passées</h2>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <p className="number">148 634</p>
                        <button className="btn-voir">en voir plus...</button>
                        <a className="arrow_top" href="/environnement">
                            <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                            <p className="commerciale">Environnement</p>
                        </a>
                    </div>
                    <div className="cude_2d_3"></div>
                    <div className="cude_2d_4">
                        <h2>Statistique 2</h2>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <div className="text_damier"><p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur
                            adipising elit. </p>
                            <button className="btn-voir">en voir plus...</button>
                        </div>
                        <a className="arrow_left" href="/technique">
                            <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                            <p className="technique">Technique</p>
                        </a>
                    </div>
                    <div className="cude_2d_5">
                        <h2>Date : </h2>
                        <input type="date" id="start" name="trip-start" />
                    </div>
                    <div className="cude_2d_6">
                        <h2>Statistique 3</h2>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
                        <button className="btn-voir">en voir plus...</button>
                        <a className="arrow_right" href="/exploitation">
                            <FontAwesomeIcon icon={faAnglesRight} className="icon" />
                            <p className="exploitation">Exploitation</p>
                        </a>
                    </div>
                    <div className="cude_2d_7"></div>
                    <div className="cude_2d_8">
                        <h2>Statistique 4</h2>
                        <FontAwesomeIcon icon={faUser} className="icon" />
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

export default Commerciale;