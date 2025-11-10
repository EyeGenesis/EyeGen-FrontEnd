import React from 'react';
import estilos from './Contribuicao.module.css';
import { FaArrowRight } from 'react-icons/fa';

const Contribuicao = () => {
  return (
    <section className={estilos.secaoContribuicao}>
      
      <div className={estilos.containerTexto}>
        <h2>Contribua também</h2>
        <p>Se identificou com nosso produto e gostaria de contribuir?</p>
        <a href="#" className={estilos.botaoSaibaComo}>
          Saiba como <FaArrowRight size={14} />
        </a>
      </div>

    </section>
  );
};

export default Contribuicao;