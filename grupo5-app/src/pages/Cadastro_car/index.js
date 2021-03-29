import React, { useState } from "react";
/* import InputMask from "react-input-mask"; */

import { useHistory } from "react-router-dom";

import Header from "./../../components/header/header.jsx";
import "./style.css";

export default (props) => {
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% TEMAS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Para entender melhor, veja na home

const temas = [{ // TEMA DARK
    body_backgroundColor: 'black',
    titulo_color: 'white',
    card_backgnd:'#666',
    wordColor: 'black',
    button_backgroundColor: '#FF4500',
    buttonWordColor: 'white',
    imp_backgnd: '#ffd27a'
    
}, 
{  // TEMA LIGHT
    body_backgroundColor: '#eee',
    titulo_color: 'black',
    card_backgnd:'#ffd27e',
    wordColor: 'black',
    button_backgroundColor: '#ff5233',
    buttonWordColor: 'black',
    imp_backgnd: '#F8F8FF'
    
}];

//é impossível mudar o body de outra maneira que não seja essa
document.getElementsByTagName('body')[0].style.backgroundColor= temas[props.tema].body_backgroundColor
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Validação de dados %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    let history = useHistory();

    const [modelo, setModelo] = useState(undefined);
    const [ano, setAno] = useState(undefined);
    const [pcompra, setPcompra] = useState(undefined);
    const [pvenda, setPvenda] = useState(undefined);

    let data_atual = new Date();
    let ano_atual = data_atual.getFullYear(); // 4 dígitos

    function cadCar(){
        
    if (modelo === undefined){
        window.alert("Você não adicionou o modelo!")
    }else if (ano === undefined){
        window.alert("Você não adicionou o ano!")
    }else if(ano>(ano_atual+1)){
        window.alert('Seu carro é tão novo assim?')
    }else if (pcompra === undefined){
        window.alert("Você não adicionou o preço de compra!")
    }else if (pvenda === undefined){
        window.alert("Você não adicionou o preço de venda!")
    }else if (pcompra > pvenda){
        window.alert("O preço de compra é maior!")
    }else {
        window.alert("Cadastro feito com sucesso!")
        window.alert("Você será redirecionado para a página listagem de carros")
        history.push('/lista-car')
    }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return (
        <>
            <Header language={props.idiomaHeader} cor={temas[props.tema].titulo_color}></Header>
            <div className="main-cadastro-carros">
                <h1 id="titulo-cad-car" 
                    style={{color:temas[props.tema].titulo_color}}
                >
                        {` ${props.idioma.titleAboveCadastroCar}`}
                </h1>
                <div className="Card-cad-car" 
                    style={{backgroundColor:temas[props.tema].card_backgnd}}
                > 
                    <div className="Card-Head-cad-car">
                        <h2>{` ${props.idioma.titleCadastroCar}`}</h2>
                    </div>

                    <div className="Conteudo-cad-car">
                        <label
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelModelo}`}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="text"
                            placeholder={` ${props.idioma.placeholderModelo}`}
                            name="modelo"
                            id="modelo"
                            onChange={(e) => setModelo(e.target.value)}
                        />
                        <br></br>
                        <label 
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelFabricacao} `}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="number"
                            placeholder={` ${props.idioma.placeholderAnoFabricacao}`}
                            name="anofab"
                            id="anofab"
                            onChange={(e) => setAno(e.target.value)}
                        />
                        <br></br>
                        <label
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelPrecoCompra}`}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="number"
                            placeholder={` ${props.idioma.placeholderPrecoC}`}
                            name="pcompra"
                            id="pcompra"
                            onChange={(e) => setPcompra(e.target.value)}
                        />
                        <br></br>
                        <label
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelPrecoVenda}`}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="number"
                            placeholder={` ${props.idioma.placeholderPrecoV}`}
                            name="pvenda"
                            id="pvenda"
                            onChange={(e) => setPvenda(e.target.value)}
                        />
                        <br></br>

                        <div id="botao">
                            <button onClick={cadCar}
                                style={{color:temas[props.tema].buttonWordColor,
                                    backgroundColor: temas[props.tema].button_backgroundColor }}
                            >
                                {` ${props.idioma.botaoCadastro}`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
