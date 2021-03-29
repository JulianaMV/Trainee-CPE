import React, {useState} from "react";
import {ViewModule, ViewList} from '@material-ui/icons';
import Button from '@material-ui/core/Button'

import Card from "./card";
import Header from "./../../components/header/header";
import './style.css'

/* 
Página para cadastrar os carros comprados com os seguintes campos:
    -Modelo do carro
    -Ano de fabricação
    -Preço de compra
    -Preço de venda 
*/

const DATA = [
    {modelo:'Fusca', ano:'1986',pcompra:6100, pvenda:7100},
    {modelo:'Ferrari', ano:'2005',pcompra:190000, pvenda:20000},
    {modelo:'Porche', ano:'2014',pcompra:90000, pvenda:100000},
    {modelo:'Saveiro', ano:'2020',pcompra:3400, pvenda:3500},
    {modelo:'Lamborghini', ano:'2011',pcompra:100000, pvenda:110000}
]

export default function Lista_car(props) {

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% TEMAS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Para entender melhor, veja na home

const temas = [{ // TEMA DARK
    body_backgroundColor: 'black',
    titulo_color: 'white',
    card_backgnd:'#666'
},
{  // TEMA LIGHT
    body_backgroundColor: '#eee',
    titulo_color: 'black',
    card_backgnd:'yellow'
}];

//é impossível mudar o body de outra maneira que não seja essa
document.getElementsByTagName('body')[0].style.backgroundColor= temas[props.tema].body_backgroundColor
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% BLOCO OU LISTA %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const [ formato, setFormato ] = useState(0)

const formatos = ["cards_block", "cards_list"];
let keys=0;

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    function listaCarros(){
        return DATA.map(carros => {
            return <Card  idiomaListaCar={props.idiomaListaCar}
                        modelo={carros.modelo}
                        ano={carros.ano}
                        pcompra={carros.pcompra}
                        pvenda={carros.pvenda}
                        tema={props.tema}
                        formato = {formato}
                        key={keys++} 
                        ></Card>
        })
    }
    return (
        <>
            <Header language={props.idiomaHeader} cor={temas[props.tema].titulo_color} ></Header>
            <div className="main-list-car">
                
                <h1 className="title-list-car" 
                    style={{color:temas[props.tema].titulo_color}}
                >
                        {`${props.idioma.titleListaCarros}`}
                </h1>
                <div className= 'botoes'>
                    <Button
                        variant="contained"
                        color="default"
                        className='buttonIcons'
                        startIcon={<ViewModule color='primary' 
                                                style = {{ fontSize: '40px'}} />}
                        value = {0}                        
                        onClick = {(e)=> setFormato(e.currentTarget.value)}
                    >
                        Blocos
                    </Button>
                    
                    <Button
                        variant="contained"
                        color="default"
                        className='buttonIcons'
                        startIcon={<ViewList color='primary' 
                                                style = {{ fontSize: '40px'}} />}
                        value = {1}
                        onClick = {(e)=> setFormato(e.currentTarget.value)}
                    >
                        Lista
                    </Button>

                </div>
            
                <div id={formatos[formato]}>
                        {listaCarros()}
                </div>
            </div>
        </>
    );
}
