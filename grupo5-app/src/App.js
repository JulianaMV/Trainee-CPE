import React, {useState} from "react";
import Routes from "./routes";

import './global.css';



export default function App() {

    const [tema,setTema]=useState(0)

    function function_tema(){
    
        if (tema===1){
            setTema(0)
        }
        if (tema===0){
            setTema(1)
        }

    }


    const [ language , setLanguage ] = useState(0)
    
    const idiomas = [
    { // Portugues
        idiomaPortugues: 'Português',
        idiomaIngles: 'Inglês',
        temaEscuro: 'Escuro',
        temaClaro: 'Claro', 
        link: "https://img.elo7.com.br/product/zoom/1CECE56/quadro-decorativo-bandeira-do-brasil-paises-com-moldura-001-quadro-com-moldura.jpg"
    }, 
    { // inglês
        idiomaPortugues: 'Portuguese',
        idiomaIngles: 'English',
        temaEscuro: 'Dark',
        temaClaro: 'Light',
        link: "http://cebesa.net/wp-content/uploads/2019/04/bandeira-eua-toeic.jpg"
    }]
    

    return (
        <div>
            <dl className="seletores">
                <dt>
                    <div className="selectLanguage" style={{ textAlign: "left" }}>
                        <img className="bandeira" src={`${idiomas[language].link}`} alt = 'Bandeira'></img>
                        <select
                        className='selectIdioma'
                        onChange={(e)=>setLanguage(e.target.value)}>
                            <option value={0}> {`${idiomas[language].idiomaPortugues}`} </option>
                            <option value={1}> {`${idiomas[language].idiomaIngles}`} </option>
                        </select>
                    </div>
                </dt>

                <dt className= "opcoesSelecao">
                    <img className='lua' src='https://img.icons8.com/office/2x/moon.png' alt="lua"/>
                    <label className="switch">
                        <input type="checkbox" onChange={()=>function_tema()}/>
                        <span className="slider round"></span>
                    </label>
                        <img className='sol' src='https://img.icons8.com/officel/2x/sun.png' alt="sol"/>
                </dt>
                
                <Routes idioma = {language} tema={tema} />
            </dl>
        </div>
    );
}
