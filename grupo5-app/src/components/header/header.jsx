import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default (props) => {

        
    const idioma=[{//PORTUGUES
        home:'Home',
        cadastro:'Cadastro',
        login:'Login',
        cadCar:'Cadastro de Carros',
        carDis:"Carros Disponíveis"

    },{//Ingles
        home:'Home',
        cadastro:'Register',
        login:'Login',
        cadCar:'Register a Car',
        carDis:"Registered Cars"
    }]


    return (
        <>
            <input type="checkbox" id="bt_menu" />
            <label htmlFor="bt_menu">&#9776;</label>

            <div id="Header-site" >
                {/* className='btn-toolbar justify-content-between' */}
                <ul id="buttons" style={{color:props.cor}}>
                    <Link to="/">
                        <li className="items-menu" style={{color:props.cor}} >{`${idioma[props.language || 0].home}`}</li>
                    </Link>
                    <Link to="/cadastro">
                        <li className="items-menu" style={{color:props.cor}} >{`${idioma[props.language || 0].cadastro}`}</li>
                    </Link>
                    <Link to="/login">
                        <li className="items-menu" style={{color:props.cor}} >{`${idioma[props.language || 0].login}`}</li>
                    </Link>
                    <Link to="/cadastro-carro">
                        <li className="items-menu" style={{color:props.cor}} >{`${idioma[props.language || 0].cadCar}`}</li>
                    </Link>
                    <Link to="/lista-car">
                        <li className="items-menu" style={{color:props.cor}} >{`${idioma[props.language || 0].carDis}`}</li>
                    </Link>
                </ul> 
            </div>
        </>
    );
};
