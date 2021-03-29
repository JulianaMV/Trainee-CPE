import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/index.js";
import Login from "./pages/login/index.js";
import Cadastro from "./pages/Cadastro_func";
import CadCar from "./pages/Cadastro_car";
import ListaCar from "./pages/Lista_car/index";

export default function Routes(props) {
    const idiomas = [];

    // Portugues
    idiomas[0] = [
        {
            //HOME
            title: "Grupo 5",
            subtitle: "Carros e Cia",
            botaoLogin: "Login",
            botaoCadastro: "Cadastro",
            botaoCadastroCarros: "Cadastro Carros",
            botaoCarrosDisponiveis: "Carros Disponíveis",
        },
        {
            // LOGIN
            titleAboveLogin: "Empresa Carros e Cia",
            titleLogin: "Entrar",
            labelLogin: "E-mail: ",
            placeholder01: "Seu e-mail",
            labelPassword: "Senha: ",
            placeholder02: "Sua senha",
            botaoCadastrar: "Cadastrar-se",
            botaoLogin: "Entrar",
        },
        {
            // Cadastro
            titleAboveCadastro: "Empresa Carros e Cia",
            titleCadastro: "Cadastro de Funcionários",
            labelNome: "Nome: ",
            placeholderNome: "Seu nome",
            labelEmail: "E-mail: ",
            placeholderEmail: "Seu e-mail",
            labelNascimento: "Data de Nascimento: ",
            placeholderDataNasci: "DD/MM/AAAA",
            labelSenha: "Senha: ",
            placeholderSenha: "Sua senha",
            labelRepeteSenha: "Confirme sua senha: ",
            placeholderRepeteSenha: "Sua senha",
            botaoCadastro: "Cadastro!",
        },
        {
            // Cadastro de carros
            titleAboveCadastroCar: "Empresa Carros e Cia",
            titleCadastroCar: "Cadastro de Carros",
            labelModelo: "Modelo: ",
            placeholderModelo: "Digite o modelo",
            labelFabricacao: "Ano de Fabricação: ",
            placeholderAnoFabricacao: "Ano (exemplo: 2001)",
            labelPrecoCompra: "Preço de Compra: ",
            placeholderPrecoC: "Exemplo: 13000",
            labelPrecoVenda: "Preço de Venda:",
            placeholderPrecoV: "Exemplo: 15000",
            botaoCadastro: "Cadastro!",
        },
        {
            // Lista de carros
            titleListaCarros: "Lista de Carros",
        },
    ];

    // Inglês
    idiomas[1] = [
        {
            //HOME
            title: "Team 5",
            subtitle: "Carros e Cia",
            botaoLogin: "Login",
            botaoCadastro: "Register",
            botaoCadastroCarros: "Register a Car",
            botaoCarrosDisponiveis: "Registered Cars",
        },
        {
            // LOGIN
            titleAboveLogin: "Carros e Cia Company",
            titleLogin: "Login",
            labelLogin: "E-mail: ",
            placeholder01: "Your e-mail",
            labelPassword: "Password: ",
            placeholder02: "Your password",
            botaoCadastrar: "Register",
            botaoLogin: "Get in",
        },
        {
            // Cadastro
            titleAboveCadastro: "Carros e Cia Company",
            titleCadastro: "Employees Register",
            labelNome: "Name: ",
            placeholderNome: "Your name",
            labelEmail: "E-mail: ",
            placeholderEmail: "Your e-mail",
            labelNascimento: "Birthday: ",
            placeholderDataNasci: "MM/DD/AAAA",
            labelSenha: "Password: ",
            placeholderSenha: "Your password",
            labelRepeteSenha: "Confirm your password: ",
            placeholderRepeteSenha: "Your password",
            botaoCadastro: "Register!",
        },
        {
            // Cadastro de carros
            titleAboveCadastroCar: "Carros e Cia Company",
            titleCadastroCar: "Register a Car",
            labelModelo: "Model: ",
            placeholderModelo: "Type the model",
            labelFabricacao: "Fabrication year: ",
            placeholderAnoFabricacao: "Year (example: 2001)",
            labelPrecoCompra: "Purchase price: ",
            placeholderPrecoC: "Example: 13000",
            labelPrecoVenda: "Sale price: ",
            placeholderPrecoV: "Example: 15000",
            botaoCadastro: "Register!",
        },
        {
            // Lista de carros
            titleListaCarros: "Registered Cars",
        },
    ];

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home idioma={idiomas[props.idioma][0]} tema={props.tema} />
                </Route>
                <Route path="/login" exact>
                    <Login
                        idioma={idiomas[props.idioma][1]}
                        idiomaHeader={props.idioma}
                        tema={props.tema}
                    />
                </Route>
                <Route path="/cadastro" exact>
                    <Cadastro
                        idioma={idiomas[props.idioma][2]}
                        idiomaHeader={props.idioma}
                        tema={props.tema}
                    />
                </Route>
                <Route path="/cadastro-carro" exact>
                    <CadCar
                        idioma={idiomas[props.idioma][3]}
                        idiomaHeader={props.idioma}
                        tema={props.tema}
                    />
                </Route>
                <Route path="/lista-car" exact>
                    <ListaCar
                        idioma={idiomas[props.idioma][4]}
                        idiomaHeader={props.idioma}
                        idiomaListaCar={props.idioma}
                        tema={props.tema}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
