import styles from './BotaoVoltar.module.css';

const BotaoVoltar = ({ onVoltar }) => {
  return (
    <div className={styles.container}>
      <button onClick={onVoltar} className={styles.btnVoltar} aria-label="Voltar">
        ←
      </button>
    </div>
  );
};

export default BotaoVoltar;