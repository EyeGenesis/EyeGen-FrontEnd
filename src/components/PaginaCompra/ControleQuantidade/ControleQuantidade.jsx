import { useState } from 'react';
import styles from './ControleQuantidade.module.css';

const ControleQuantidade = () => {
  const [quantidade, setQuantidade] = useState(1);

  const incrementar = () => {
    setQuantidade(prev => prev + 1);
  };

  const decrementar = () => {
    setQuantidade(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Quantidade</label>
      
      <div className={styles.controle}>
        <button 
          onClick={decrementar}
          className={styles.btnQuantidade}
          aria-label="Diminuir quantidade"
        >
          -
        </button>
        
        <span className={styles.quantidade}>{quantidade}</span>
        
        <button 
          onClick={incrementar}
          className={styles.btnQuantidade}
          aria-label="Aumentar quantidade"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ControleQuantidade;