import React, { useState } from "react";
import "./styles.css";
import ComponenteNoIdiomaSelecionado from "./comp_ing.jsx";

/*
Passos e Orientações :
- Uma vez copiado o diretório crie um branch para seu grupo e trabalhe sempre nele.
- Rode npm install e começe a trabalhar na página do seu grupo dentro de /pages.
- Cada grupo deverá criar uma página em um intervalo de tempo estipulado na capacitação (prazo sujeito a mudança).
- Use esta oportunidade para mostrar os conhecimentos adquiridos durante as últimas capacitações.
- Ao final do tempo estipulado pare de trabalhar e dê o commit.
- Todos os branchs de todos os grupos serão unidos ao master e o resultado final será mostrado em seguida.
- Se precisarem de referência para criação de uma página, deixei a página localizada em /pages/Example para vocês consultarem.

Regras da dinâmica:
- Vocês não poderão instalar nenhuma dependencia extra no projeto, trabalhem com o que já tem instalado.
- Use apenas styles.css da pasta do seu grupo para estilos.
- Nesses estilos não sobrescreva componentes padrão do html, crie classes css com nome no formato -> g*_nomeClasse / para * = número do seu grupo.
- Não faça nenhuma alteração em routes.js, App.js nem com o index.js global e pastas de outros grupos.
- Se quiser pode apagar esse comentário (depois de ler tudo é claro).
*/

export default function Grupo5() {
    const [idioma, setIdioma] = useState(0);

    const linkImage = [{
        link: "https://img.elo7.com.br/product/zoom/1CECE56/quadro-decorativo-bandeira-do-brasil-paises-com-moldura-001-quadro-com-moldura.jpg"
    },{
        link: "http://cebesa.net/wp-content/uploads/2019/04/bandeira-eua-toeic.jpg"
    }]

    return (
        <>
            <div className="selectLanguage" style={{ textAlign: "left" }}>
                <img className="bandeira" src={`${linkImage[idioma].link}`} ></img> 
                <select
                    name="selectLanguage"
                    className="select"
                    onChange={(e) => setIdioma(e.target.value)}
                >
                    <option value={0}> Português </option>
                    <option value={1}> Inglês </option>
                </select>
            </div>
            <ComponenteNoIdiomaSelecionado language={idioma}/>
        </>
    );
  
}
