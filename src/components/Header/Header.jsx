import { useState } from 'react';
import style from './Header.module.css';
import logo from '../../assets/img/nav/logo.ico';
import perfilGeny from '../../assets/img/nav/perfil_geny.png';


export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [ouvindo, setOuvindo] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const ativarComandoVoz = (e) => {
    e.preventDefault(); 


    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Seu navegador não suporta comandos de voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setOuvindo(true);
      console.log("Ouvindo...");
    };

    recognition.onend = () => {
      setOuvindo(false);
      console.log("Parou de ouvir.");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Você disse: ", transcript);


      if (transcript.includes("comprar") || transcript.includes("compra")) {
        const botaoComprar = document.getElementById("btn-comprar-nav");

        if (botaoComprar) {

          alert(`Geny entendeu: "${transcript}". Indo para compras!`);

          botaoComprar.click();
        }
      } else {

        alert(`Geny ouviu: "${transcript}". Tente dizer "Comprar".`);
      }
    };

    recognition.start();
  };

  return (
    <header>
      <nav className={style.nav}>
        <div className={style.nav_esquerda}>
          <img className={style.logo} src={logo} alt="logo do eyegen, uma oculos junto com uma borboleta" />
          <a href="#"> Inicio </a>
          <a href="#"> Sobre nós</a>
          <a href="#"> Suporte </a>
          <a href="#"
            className={style.botao_geny}
            onClick={ativarComandoVoz}
            style={{ border: ouvindo ? '2px solid #ff0000' : '1px solid #fff' }} 
            title="Clique para falar com a Geny">
            <div className={style.perfil_geny}></div>
            <span>GENY</span>
          </a>
        </div>

        <div className={style.nav_direita}>
          <a href="#"> &#127760; PT-BR</a>
          <a href="#" id="btn-comprar-nav"> &#128722; Comprar</a>
          <a href="#">Planos</a>
          <a href="#">Entrar</a>
          <button className={style.cadastrar}>
            <a href="#">Cadastre-se</a>
          </button>
        </div>

        <button className={style.menu_hamburger} onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>

      <div className={`${style.menu_mobile_overlay} ${menuAberto ? style.ativo : ''}`}>
        <div className={style.menu_mobile_header}>
          <img className={style.logo_mobile} src={logo} alt="logo eyegen" />
          <button className={style.botao_fechar} onClick={toggleMenu}>
            &times;
          </button>
        </div>

        <div className={style.menu_mobile_botoes_topo}>
          <button className={style.cadastrar_mobile}>
            <a href="#">Cadastre-se</a>
          </button>
          <a href="#" className={style.entrar_mobile}>Entrar</a>
        </div>

        <div className={style.menu_mobile_links}>
          <a href="#" onClick={toggleMenu}>Início</a>
          <a href="#" onClick={toggleMenu}>Sobre Nós</a>
          <a href="#" id="btn-comprar-nav" onClick={toggleMenu}>Comprar</a>
          <a href="#" onClick={toggleMenu}>Suporte</a>
          <a href="#" onClick={toggleMenu}>Planos</a>
          <a href="#"
            className={style.botao_geny}
            onClick={ativarComandoVoz}
            style={{ border: ouvindo ? '2px solid #ff0000' : '1px solid #fff' }} 
            title="Clique para falar com a Geny">
            <div className={style.perfil_geny}></div>
            <span>GENY</span>
          </a>
        </div>
      </div>
    </header>
  );
}