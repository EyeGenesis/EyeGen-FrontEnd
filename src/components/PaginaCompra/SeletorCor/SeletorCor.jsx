import { useState } from 'react';
import styles from './SeletorCor.module.css';

const SeletorCor = ({ cores }) => {
  const [corSelecionada, setCorSelecionada] = useState(cores[0]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Color:</label>
      
      <div className={styles.cores}>
        {cores.map(cor => (
          <button
            key={cor.id}
            className={`${styles.btnCor} ${corSelecionada.id === cor.id ? styles.corSelecionada : ''}`}
            style={{ 
              backgroundColor: cor.valor,
              border: cor.nome === 'Branco' ? '2px solid #e0e0e0' : '2px solid transparent'
            }}
            onClick={() => setCorSelecionada(cor)}
            title={cor.nome}
            aria-label={`Selecionar cor ${cor.nome}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SeletorCor;