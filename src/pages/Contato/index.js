import React, { Component } from "react";
import './contato.css';
import Header1 from '../../components/Header1';
import { Button } from "@mui/material";

export default class Contato extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <div className="contatoContainer">
          <input type="text" placeholder="Nome" className='campo' />
          <input type="text" placeholder="E-mail" className='campo' />
          <select name="" id="" className='select' >
            <option style={{ display: 'none' }}>Motivo do contato</option>
            <option value="parceria">Parceria</option>
            <option value="elogio">Elogio</option>
            <option value="reclamacao">Reclamação</option>
            <option value="outros">Outros</option>
          </select>
          <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem' className='campo' />
          <Button variant="contained" href="/mensagemenviada" style={{ backgroundColor: '#5B69E8' }}>Enviar</Button>
        </div>
      </div>
    )
  }
};