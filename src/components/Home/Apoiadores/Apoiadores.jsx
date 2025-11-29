import React from 'react';
import estilos from './Apoiadores.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaArrowRight } from 'react-icons/fa';
import logoSenac from '../../../assets/senac-logo.png';
import logoProa from '../../../assets/proa-logo.jpg';
import logoNavis from '../../../assets/logo_navis.jpeg'

const apoiadores = [
  { id: 1, src: logoSenac, alt: 'Logo do Senac' },
  { id: 2, src: logoProa, alt: 'Logo do Instituto PROA' },
  { id: 3, src: logoNavis, alt: 'Logo da Navis' },
  { id: 4, src: logoSenac, alt: 'Logo do Senac' },
  { id: 5, src: logoProa, alt: 'Logo do Instituto PROA' },
  { id: 6, src: logoNavis, alt: 'Logo da Navis' },
];

const Apoiadores = () => {
  return (
    <section className={estilos.secaoApoiadores}>
      <div className={estilos.containerTexto}>
        <h2>Nossos Apoiadores</h2>
        <p>Se identificou com nosso produto e gostaria de contribuir?</p>
        <a href="#" className={estilos.botaoSaibaComo}>
          Saiba como <FaArrowRight size={14} />
        </a>
      </div>

      <div className={estilos.containerCarrossel}>
        <Swiper
          modules={[Autoplay]}
          className={estilos.swiperContainer}
          spaceBetween={30}      
          slidesPerView={'auto'}
          loop={true}             
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
        >
          {apoiadores.map((apoiador) => (
            <SwiperSlide key={apoiador.id} className={estilos.swiperSlide}>
              
              <div className={estilos.cartaoLogo}>
                <img src={apoiador.src} alt={apoiador.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Apoiadores;