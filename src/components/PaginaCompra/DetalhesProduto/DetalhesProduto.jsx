
import styles from './DetalhesProduto.module.css';

const DetalhesProduto = ({ nome, descricao, preco, avaliacoes, estrelas }) => {
  // Função para renderizar as estrelas
  const renderEstrelas = (quantidade) => {
    const estrelasCompletas = Math.floor(quantidade);
    const temMeiaEstrela = quantidade % 1 !== 0;
    const estrelas = [];

    for (let i = 0; i < estrelasCompletas; i++) {
      estrelas.push(<span key={i}>★</span>);
    }

    if (temMeiaEstrela) {
      estrelas.push(<span key="meia">☆</span>);
    }

    return estrelas;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{nome}</h1>
      
      <p className={styles.descricao}>{descricao}</p>
      
      <div className={styles.avaliacoes}>
        <div className={styles.estrelas}>
          {renderEstrelas(estrelas)}
        </div>
        <span className={styles.numAvaliacoes}>({avaliacoes})</span>
      </div>
      
      <p className={styles.preco}>R$ {preco.toFixed(2)}</p>
    </div>
  );
};

export default DetalhesProduto;