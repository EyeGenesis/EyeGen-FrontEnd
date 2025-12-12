import styles from './BotaoVoltar.module.css';

export default function BotaoVoltar() {
  return (
    <button className={styles['botao-voltar']}>
      <img
        src="../../src/assets/img/voltar.png"
        alt="Voltar"
        className={styles['icone-voltar']}
      />
    </button>
  );
}
