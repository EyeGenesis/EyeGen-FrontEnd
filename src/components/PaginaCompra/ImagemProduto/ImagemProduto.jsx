import { useState } from 'react';
import styles from './ImagemProduto.module.css';

const ImagemProduto = ({ imagens }) => {
  const [imagemAtiva, setImagemAtiva] = useState(0);

  return (
    <div className={styles.container}>
      {/* Imagem Principal */}
      <div className={styles.imagemPrincipal}>
        <img 
          src={imagens[imagemAtiva]} 
          alt={`Produto - visualização ${imagemAtiva + 1}`}
          className={styles.imagem}
        />
      </div>

      {/* Thumbnails (Miniaturas) */}
      <div className={styles.thumbnails}>
        {imagens.map((imagem, index) => (
          <button
            key={index}
            onClick={() => setImagemAtiva(index)}
            className={`${styles.thumbnail} ${imagemAtiva === index ? styles.thumbnailAtivo : ''}`}
          >
            <img 
              src={imagem} 
              alt={`Miniatura ${index + 1}`}
              className={styles.thumbnailImg}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImagemProduto;