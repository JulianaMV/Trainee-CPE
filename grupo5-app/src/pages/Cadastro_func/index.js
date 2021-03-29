import React, {useState } from "react";
import InputMask from "react-input-mask";

import "./style.css";
import { useHistory } from "react-router-dom";

import Header from "./../../components/header/header.jsx";

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

    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Validação de dados %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    let history = useHistory();

    
    let data_atual = new Date();
    let ano_atual = data_atual.getFullYear(); // 4 dígitos

    const [nome, setNome] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [senha1, setSenha1] = useState(undefined);
    const [senha2, setSenha2] = useState(undefined);

    function cadastrar() {
        let avaliate = 0;

        //%%%% Testando se existe algum undefined
        if (nome === undefined) {
            window.alert("Você não colocou o nome!");
            avaliate++;
        } else if (email === undefined) {
            window.alert("Você não colocou o email!");
            avaliate++;
        } else if (data === undefined) {
            window.alert("Você não colocou a data!");
            avaliate++;
        } else if (senha1 === undefined) {
            window.alert("Você não colocou a senha!");
            avaliate++;
        } else if (senha2 === undefined) {
            window.alert("Você não confirmou a senha!");
            avaliate++;
        } else {
            //%%%% Validando as entradas
            if (senha1 !== senha2) {
                window.alert("Suas senhas não estão iguais!");
                avaliate++;
            } else if (senha1.length < 6) {
                window.alert("Sua senha deve ter no mínimo 6 caracteres!");
                avaliate++;
            } else if (email.indexOf("@") === -1) {
                window.alert("Seu email não é válido!");
                avaliate++;
            } else if (data.length < 10) {
                window.alert("Você não colocou a data completa!");
                avaliate++;
            } else {
                //Transformando e acessando os elementos do vetor//
                const data_number = data.split("/");
                const dia_nas = parseInt(data_number[0]);
                const mes_nas = parseInt(data_number[1]);
                const ano_nas = parseInt(data_number[2]);

                if (dia_nas > 31) {
                    window.alert(
                        " Sua data de nascimento contém um dia inválido!"
                    );
                    avaliate++;
                } else if (mes_nas > 12) {
                    window.alert(
                        "Sua data de nascimento contém um mês inválido!"
                    );
                    avaliate++;
                } else if (ano_nas > ano_atual || ano_nas < 1900) {
                    window.alert(
                        "Sua data de nascimento contém um ano inválido!"
                    );
                    avaliate++;
                }else if ((ano_atual - ano_nas)< 14){
                    window.alert('Trabalho infantil é errado!')
                    avaliate++
                }
            } //impede o usuário de inserir valores absurdos//

            if (avaliate === 0) {
                window.alert(
                    "Parabéns! Seu cadastro foi realizado com sucesso!"
                );
                window.alert("Você será redirecionado para a Home.");
                history.push("/");
            } else {
                window.alert("Tente novamente!");
            }
        }
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    return (
        <>
            <Header
                language={props.idiomaHeader}
                cor={temas[props.tema].titulo_color}
            ></Header>
            
            <div  className="main-cadastro-func">
                <h1 id="titulo-cad-pes" 
                style={{color:temas[props.tema].titulo_color}}
                >
                    {` ${props.idioma.titleAboveCadastro}`}
                </h1>

                <div  className="Card-cad-pes" 
                    style={{backgroundColor:temas[props.tema].card_backgnd}}>
                    <div className="Card-Head-cad-pes" 
                        style={{color:temas[props.tema].wordColor}}
                    >
                        <h2>{`${props.idioma.titleCadastro}`}</h2>
                    </div>

                    <div className="Conteudo-cad-pes">
                        <label
                            style={{color:temas[props.tema].wordColor}}
                        >
                                {` ${props.idioma.labelNome}`}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="text"
                            placeholder={` ${props.idioma.placeholderNome}`}
                            name="nome"
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <br></br>
                        <label 
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelEmail}`}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="email"
                            placeholder={` ${props.idioma.placeholderEmail}`}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br></br>
                        <label 
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelNascimento}`}
                        </label>
                        <InputMask
                        
                            style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            mask="99/99/9999"
                            maskChar=""
                            placeholder={` ${props.idioma.placeholderDataNasci}`}
                            onChange={(e) => setData(e.target.value)}
                        />
                        <br />
                        <label
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelSenha}`}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="password"
                            placeholder={` ${props.idioma.placeholderSenha}`}
                            name="senha"
                            onChange={(e) => setSenha1(e.target.value)}
                        />
                        <br></br>
                        <label
                            style={{color:temas[props.tema].wordColor}}
                        >
                            {` ${props.idioma.labelRepeteSenha}`}
                        </label>
                        <input style={{backgroundColor:temas[props.tema].imp_backgnd}}
                            type="password"
                            placeholder={` ${props.idioma.placeholderRepeteSenha}`}
                            name="senha"
                            onChange={(e) => setSenha2(e.target.value)}
                        />

                        <br></br>

                        <div id="botao" >
                            <button
                                onClick={cadastrar}
                                style={{color:temas[props.tema].buttonWordColor,
                                    backgroundColor: temas[props.tema].button_backgroundColor }}
                            >
                            >{` ${props.idioma.botaoCadastro}`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
