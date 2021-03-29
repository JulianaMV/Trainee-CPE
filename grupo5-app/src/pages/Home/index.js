import React from "react";
import { Link } from 'react-router-dom';
import { VpnKey, GroupAdd, DirectionsCar, Commute } from '@material-ui/icons';

import './style.css'

export default (props) => {

    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% TEMAS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    //Usando a maneira de temas atual, é possível você criar um tema dark específico pra cada site.
    // É só você criar mais uma variável dentro do objeto 'temas' e depois ir lá nas tags e adicionar 
    // style={propriedade : temas[tema].nova_variável}
    //Lembre-se de colocar a mesma variável nois 2 objetos do vetor

    const temas = [{ // TEMA DARK
        body_backgroundColor: 'black',
        titulo_color: 'white',
        button_backgroundColor: 'orangered',
        wordColor: 'white'
    }, 
    {  // TEMA LIGHT
        body_backgroundColor: '#eee',
        titulo_color: 'black',
        button_backgroundColor: 'rgb(233, 157, 57)',
        wordColor: 'black'

    }];

    //é impossível mudar o body de outra maneira que não seja essa.
    //Isso acontece pois não há uma div que tenha o tamanho do body, para eu mudar o background color
    document.getElementsByTagName('body')[0].style.backgroundColor= temas[props.tema].body_backgroundColor
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% TEMAS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    const linkStyle = {textDecoration: 'none',
    textAlign:'center'
    }

    return (
        <div >
            {/* <Header></Header> */}
            <h1 className="titulo-home" style={{color:temas[props.tema].titulo_color}}>{` ${props.idioma.title}`}</h1>
            <div className="conteudo" >
                <h3 className="subtitleCompany" 
                style={{linkStyle, color:temas[props.tema].titulo_color}}>
                    {` ${props.idioma.subtitle}`}
                </h3>
                <ul className = "lista-home">
                    <Link style={linkStyle} to='/login'>
                    <li className="items-home" 
                        style = { 
                            {backgroundColor: temas[props.tema].button_backgroundColor, 
                                color: temas[props.tema].wordColor } }
                    >
                        <VpnKey color='action' 
                                    style = {{ fontSize: '40px' ,
                                    marginLeft: '-15px',
                                    marginRight: '15px'}}
                        />
                        {` ${props.idioma.botaoLogin}`}
                    </li>
                    </Link>
                    <Link style={linkStyle} to='/cadastro'>
                    <li  className="items-home" 
                        style = { 
                        {backgroundColor: temas[props.tema].button_backgroundColor, 
                        color: temas[props.tema].wordColor } }
                    >
                        <GroupAdd color='action' 
                                    style = {{ fontSize: '40px' ,
                                    marginLeft: '-20px',
                                    marginRight: '12px'}}
                        />
                        {` ${props.idioma.botaoCadastro}`}
                    </li>
                    </Link>
                    <Link style={linkStyle} to='/cadastro-carro'>
                    <li className="items-home" 
                        style = { 
                            {backgroundColor: temas[props.tema].button_backgroundColor, 
                            color: temas[props.tema].wordColor }}
                    >   
                        <DirectionsCar color='action' 
                                    style = {{ fontSize: '40px' ,
                                    marginRight: '10px'}}
                        />
                        {` ${props.idioma.botaoCadastroCarros} `}
                    </li>
                    </Link>
                    <Link style={linkStyle} to="/lista-car">
                        <li className="items-home" 
                            style = { 
                                {backgroundColor: temas[props.tema].button_backgroundColor, 
                                color: temas[props.tema].wordColor } }
                        >   
                            <Commute color='action' 
                                    style = {{ fontSize: '40px' ,
                                    marginLeft: '10px',
                                    marginRight: '7px'}}
                            />
                            {` ${props.idioma.botaoCarrosDisponiveis}`}
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};
