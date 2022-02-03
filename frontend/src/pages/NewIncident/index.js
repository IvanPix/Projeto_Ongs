import React from "react";

import logoImg from '../../assets/logo.png';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="The Pet Friends"/>

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do Caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}