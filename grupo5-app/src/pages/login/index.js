import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import "./style.css";

import Header from "../../components/header/header.jsx";

export default (props) => {
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% TEMAS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    //Para entender melhor, veja na home

    const temas = [
        {
            // TEMA DARK
            body_backgroundColor: "black",
            titulo_color: "white",
            card_backgnd: "#666",
            wordColor: 'black',
            button_backgroundColor: '#FF4500',
            buttonWordColor: 'white',
            imp_backgnd: '#ffd27a'
        },
        {
            // TEMA LIGHT
            body_backgroundColor: "#eee",
            titulo_color: "black",
            card_backgnd:'#ffd27e',
            wordColor: 'black',
            button_backgroundColor: '#ff5233',
            buttonWordColor: 'black',
            imp_backgnd: '#F8F8FF'

        }];

    //é impossível mudar o body de outra maneira que não seja essa
    document.getElementsByTagName("body")[0].style.backgroundColor =temas[props.tema].body_backgroundColor;
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    //%%%%%%%%%%%%%%%%%%%% Validação de dados %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    let history = useHistory();

    const [email, setEmail] = useState("defaultE");
    const [senha1, setSenha1] = useState("defaultS");

    function cadastrar() {
        history.push("/cadastro");
    }

    function login() {
        if (email === "admin" && senha1 === "admin") {
            window.alert(
                "Login feito! Você será Redirecionado para a página Inicial."
            );
            history.push("/");
        } else {
            window.alert("Login não aceito.\nSenha:admin\nLogin:admin");
        }
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return (
        <>
            <Header language={props.idiomaHeader} cor={temas[props.tema].titulo_color}></Header>

            <div className="main-login" >
                <h1 id="titulo-login" 
                    style={{color:temas[props.tema].titulo_color}}
                >
                    {` ${props.idioma.titleAboveLogin}`}
                </h1>

                <div className="Card-login" 
                    style={{backgroundColor:temas[props.tema].card_backgnd}}
                >
                    <div className="Header-login">
                        <h2>{`${props.idioma.titleLogin}`}</h2>
                    </div>

                    <div className="Conteudo-login">
                        <label
                            style={{color: temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelLogin}`}
                        </label>
                        <input  style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="email"
                            placeholder={` ${props.idioma.placeholder01} `}
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br></br>

                        <label
                            style={{color: temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelPassword}`}
                        </label>
                        <input  style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="password"
                            placeholder={` ${props.idioma.placeholder02}`}
                            name="senha"
                            id="senha"
                            onChange={(e) => setSenha1(e.target.value)}
                        />
                        <br></br>

                        <div id="botao-login">
                            <button
                                onClick={cadastrar}
                                style={{color:temas[props.tema].buttonWordColor,
                                    backgroundColor: temas[props.tema].button_backgroundColor }}
                            >
                            >{` ${props.idioma.botaoCadastrar}`}</button>

                            <button id="butcad" 
                                onClick={login}
                                style={{color:temas[props.tema].buttonWordColor,
                                    backgroundColor: temas[props.tema].button_backgroundColor }}
                            >
                                {` ${props.idioma.botaoLogin}`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
