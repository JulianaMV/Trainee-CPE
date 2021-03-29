import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Example() {

  //State do contador de clicks.
  const [numclick, setNumclick] = useState(0);

  //State para manipular o numero.
  const [number, setNumber] = useState(10);

  //States para manipular caixinhas.
  const [boxvec, setBoxvec] = useState([1, 2, 3]);
  const counter = useRef(3);

  //Função para contador de clicks
  function handleClickCount() {
    setNumclick(numclick + 1);
  }

  //Funções para manipular o número
  function handleSubtract() {
    setNumber(number - 1);
  }
  function handleSum() {
    setNumber(number + 1);
  }
  function handleMult2() {
    setNumber(number * 2);
  }
  function handle0() {
    setNumber(0);
  }

  //Funções para manipular as caixinhas.
  function handleAddBox() {
    if (counter.current < 30) {
      counter.current = counter.current + 1;
      let aux = [...boxvec];
      aux.push(counter.current);
      setBoxvec(aux);
    } else {
      alert("Já deu de caixinha né?");
    }
  }
  function handleRemoveBox() {
    if (counter.current > 0) {
      counter.current = counter.current - 1;
      let aux = [...boxvec];
      aux.pop();
      setBoxvec(aux);
    } else {
      alert("Não pode remover mais");
    }
  }

  return (
    <div className="e_fullContainer">
      <div className="d-flex justify-content-center">
        <h1 className="e_mainTitle">Página de exemplos simples</h1>
      </div>
      <div className="e_centralBox align-itens-center">
        <div className="container">
          <div className="d-flex justify-content-center e_spacedRow">
            <h3 className="e_regularText">Este botão conta clicks -></h3>
            <Button onClick={() => { handleClickCount() }} variant="success">{numclick}</Button>
          </div>
          <div className="d-flex justify-content-center e_spacedRow">
            <h3 className="e_regularText">Manipule este numero -> | {number} |</h3>
            <Button className="e_spacedCol" onClick={() => { handleSubtract() }} variant="success">-1</Button>
            <Button className="e_spacedCol" onClick={() => { handleSum() }} variant="primary">+1</Button>
            <Button className="e_spacedCol" onClick={() => { handleMult2() }} variant="success">*2</Button>
            <Button className="e_spacedCol" onClick={() => { handle0() }} variant="info">=0</Button>
          </div>
          <div className="d-flex justify-content-center e_spacedRow">
            <h3 className="e_regularText">Manipule caixinhas!</h3>
            <div className="d-flex flex-wrap">
              {
                boxvec.map((value) => {
                  return (
                    <div className="e_smallBox">{value}</div>
                  )
                })
              }
            </div>
          </div>
          <div className="d-flex justify-content-center e_spacedRow">
            <Button className="e_spacedCol e_spacedRow" variant="info" onClick={() => { handleAddBox() }}>Adicionar caixinha</Button>
            <Button className="e_spacedCol e_spacedRow" variant="info" onClick={() => { handleRemoveBox() }}>Remover caixinha</Button>
          </div>
          <div className="d-flex justify-content-center e_spacedRow">
            <h3 className="e_regularText">Links para as páginas dos grupos!</h3>
          </div>
          <div className="d-flex flex-wrap justify-content-center e_spacedRow">
            <Link to='/grupo1'>
              <Button className="e_spacedCol e_spacedRow" variant="success">Grupo1</Button>
            </Link>
            <Link to='/grupo2'>
              <Button className="e_spacedCol e_spacedRow" variant="success">Grupo2</Button>
            </Link>
            <Link to='/grupo3'>
              <Button className="e_spacedCol e_spacedRow" variant="success">Grupo3</Button>
            </Link>
            <Link to='/grupo4'>
              <Button className="e_spacedCol e_spacedRow" variant="success">Grupo4</Button>
            </Link>
            <Link to='/grupo5'>
              <Button className="e_spacedCol e_spacedRow" variant="success">Grupo5</Button>
            </Link>
            <Link to='/grupo6'>
              <Button className="e_spacedCol e_spacedRow" variant="success">Grupo6</Button>
            </Link>
            <Link to='/grupo7'>
              <Button className="e_spacedCol e_spacedRow" variant="success">Grupo7</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
