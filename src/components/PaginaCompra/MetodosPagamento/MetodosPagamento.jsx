import styles from './MetodosPagamento.module.css';

const MetodosPagamento = () => {
  const metodos = [
    { id: 1, nome: 'Mastercard', imagem: '/assets/img/mastercard.png' },
    { id: 2, nome: 'Pix', imagem: '/assets/img/pix.png' },
    { id: 3, nome: 'Visa', imagem: '/assets/img/visa.png' },
    { id: 4, nome: 'PayPal', imagem: '/assets/img/paypal.png' },
    { id: 5, nome: 'Google Pay', imagem: '/assets/img/googlepay.png' },
    { id: 6, nome: 'Apple Pay', imagem: '/assets/img/applepay.png' }
  ];

  return (
    <div className={styles.container}>
      <label className={styles.label}>Métodos de pagamento</label>
      
      <div className={styles.metodos}>
        {metodos.map(metodo => (
          <div 
            key={metodo.id} 
            className={styles.metodo}
            title={metodo.nome}
          >
            <img 
              src={metodo.imagem} 
              alt={metodo.nome}
              className={styles.imagem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetodosPagamento;