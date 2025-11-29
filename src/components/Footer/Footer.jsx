import style from './Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer() {

    return (

        <footer className={style.footer}>
            <h1>Fique atualizado</h1>

            <div className={style.input_email}>
                <input type="email" placeholder='Email' required />

                <button type='submit'>
                    &rarr;
                </button>
            </div>
            
            <div className={style.links}>
                <ul type="none">
                    <h2>Produtos</h2>
                    <li><Link to="/comprar">Eyeglass</Link></li>
                    <li><Link to="/planos">Planos</Link></li>
                </ul>

                <ul type="none">
                    <h2>Redes Sociais</h2>
                    <li><a href="https://www.instagram.com/eyegenesis?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel='external'>Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/eyegen-org/" target='_blank' rel='external'>Linkedin</a></li>


                </ul>

                <ul type="none">
                    <h2>Dúvidas</h2>
                    <li><Link to="/suporte" id="btn-suporte-nav">Suporte</Link></li>

                </ul>

                <ul type="none">
                    <h2><a href="#">Sobre</a></h2>
                    <li><Link to="/sobre-nos" id="btn-sobre-nav">Sobre nós</Link></li>
                </ul>
            </div>
        </footer>
    )

}