import React from "react";

import "./card.css";

export default function Lista_car(props) {
    
    const idioma=[{//PORTUGUES
        ano:'Ano: ',
        pcCompr:'Preço de compra: R$',
        pcVenda:'Preço de Venda: R$'

    },{//iNGLES
        ano:'Year: ',
        pcCompr:'Purchase Price: R$',
        pcVenda:'Sale Price: R$'
    }
    ]
    //%%%%%%%%%%%%%%%%%%%%%%%% Temas %%%%%%%%%%%%%%%
    //Para mudar as cores, é só mudar o objeto abaixo :)
   const temas =[{ //DARK
    backgroundColor:'#666',
    colorModelo: 'black',
    colorInfo:'white',
    titulo_backgnd:'#FF4500'
    
   },{  // LIGHT
    backgroundColor:'#F0F8FF',
    colorModelo: 'white', // cor do modelo
    colorInfo:'black',   // cor dos dados do carro
    titulo_backgnd:'#ff5233'
   }]
   //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

   //%%%%%%%%%%%%%%%%%%%%%%%% Formato %%%%%%%%%%%%%%%
   const formatos =[ "Card_block", "Card_list"]

   //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    return (
        <div id={formatos[props.formato]} >
            <div id="cardHeader" style={{backgroundColor:temas[props.tema].titulo_backgnd}}>
                <label 
                    style={{color:temas[props.tema].colorModelo}}
                >
                    {props.modelo}
                </label>
            </div>
            <div id="cardConteudo" style={{backgroundColor:temas[props.tema].backgroundColor}}>
                <label
                    style={{color:temas[props.tema].colorInfo}}
                >
                    {`${idioma[props.idiomaListaCar || 0].ano}${props.ano}`}
                </label><br/>
                <label
                    style={{color:temas[props.tema].colorInfo}}
                >
                    {`${idioma[props.idiomaListaCar || 0].pcCompr}${props.pcompra},00`}
                </label>
                <label
                    style={{color:temas[props.tema].colorInfo}}
                >
                    {`${idioma[props.idiomaListaCar || 0].pcVenda}${props.pvenda},00`}
                </label>
            </div>
        </div>
    );
}
