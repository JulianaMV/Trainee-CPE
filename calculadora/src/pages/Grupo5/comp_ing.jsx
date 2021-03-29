import React, { useState } from "react";

export default function Portugues(props) {


    const idiomas = [{ // PORTUGUÊS
        title: "Calculadora Grupo 5",
        placeholder1: "Primeiro número",
        placeholder2: "Segundo número",
        somarOp: "Somar",
        subtrairOp: "Subtrair",
        multiplicarOp: "Multiplicar",
        dividirOp: "dividir",
        expoOp: "Exponenciação",
        resultado: "Resultado"
    },
    {  // INGLÊS
        title: "Calculator Team 5",
        placeholder1: "First number",
        placeholder2: "Second number",
        somarOp: "Sum",
        subtrairOp: "Subtract",
        multiplicarOp: "Times",
        dividirOp: "Divide",
        expoOp: "Exponentiation",
        resultado: "Result"
    }]


    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const [res, setRes] = useState(0);
    const style = {};

    // const [idioma, setIdioma] = useState(0);

    function somar(num1, num2) {
        setRes(num1 + num2);
    }

    function subtrair(num1, num2) {
        setRes(num1 - num2);
    }

    function multiplicar(num1, num2) {
        setRes(num1 * num2);
    }

    function dividir(num1, num2) {
        setRes((num1 / num2).toFixed(2));
    }

    function exponencial(num1, num2) {
        setRes(Math.pow(num1, num2));
    }

    if (res < 0) {
        style.color = "red";
    } else if (res === 0) {
        style.color = "white";
    } else {
        style.color = "green";
    }


    return (
        <div style={{ textAlign: "center"}}>
            <h1>{ idiomas[props.language].title }</h1>
            <input
                type="text"
                placeholder={`${idiomas[props.language].placeholder1}`}
                onChange={(e) => {
                    setNum1(parseInt(e.target.value, 10));
                }}
            />
            <br></br>
            <input
                type="text"
                placeholder={`${idiomas[props.language].placeholder2}`}
                onChange={(e) => {
                    setNum2(parseInt(e.target.value, 10));
                }}
            />
            <br></br>
            <br></br>
            <button
                onClick={() => {
                    somar(num1, num2);
                }}
            >
                {idiomas[props.language].somarOp}
            </button>
            <button
                onClick={() => {
                    subtrair(num1, num2);
                }}
            >
                {idiomas[props.language].subtrairOp}
            </button>
            <button
                onClick={() => {
                    multiplicar(num1, num2);
                }}
            >
                {idiomas[props.language].multiplicarOp}
            </button>
            <button
                onClick={() => {
                    dividir(num1, num2);
                }}
            >
                {idiomas[props.language].dividirOp}
            </button>
            <button
                onClick={() => {
                    exponencial(num1, num2);
                }}
            >
                {idiomas[props.language].expoOp}
            </button>
            <hr></hr>
            <div>
                <span>{`${idiomas[props.language].resultado}: `} </span>
                <span style={style}>{res}</span>
            </div>
            <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Nazare"/>
        </div>
    );
}
