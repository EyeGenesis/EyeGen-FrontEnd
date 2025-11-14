import styles from './BotaoVoltar.module.css';

export default function BotaoVoltar() {
  return (
    <button className={styles['botao-voltar']}>
      {/* Você troca o caminho da imagem depois */}
      <img
        src="../../src/assets/img/voltar.png"
        alt="Voltar"
        className={styles['icone-voltar']}
      />
    </button>
  );
}
