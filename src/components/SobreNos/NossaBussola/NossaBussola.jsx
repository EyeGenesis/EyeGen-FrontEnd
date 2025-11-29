import React from "react";
import estilos from "./NossaBussola.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {

  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import Criatividade from "../../../assets/criatividade.png";
import ImpactoSocial from "../../../assets/impacto-social.png";
import Inclusao from "../../../assets/inclusao.png";
import Respeito from "../../../assets/respeito.png";
import Colaboracao from "../../../assets/colaboracao.png";

const valores = [
  {
    id: 1,
    icon: <img src={Criatividade} alt="Criatividade" width={65}/>,
    titulo: "Criatividade",
    texto:
      "Enxergamos possibilidades além do óbvio, explorando novas ideias e abordagens para criar soluções tecnológicas verdadeiramente transformadoras.",
  },
  {
    id: 2,
    icon: <img src={ImpactoSocial} alt="Impacto Social" width={65}/>,
    titulo: "Impacto Social",
    texto:
      "Criamos oportunidades para que todos ocupem seu espaço na sociedade, elevando a autoestima e impactando positivamente a vida de pessoas em situação de vulnerabilidade.",
  },
  {
    id: 3,
    icon: <img src={Inclusao} alt="Inclusão" width={65}/>,
    titulo: "Inclusão",
    texto:
      "Nosso foco é incluir pessoas com deficiência visual, independentemente de sua etnia. Por meio do nosso produto, buscamos ampliar seu espaço, sua voz e suas oportunidades na sociedade.",
  },
  {
    id: 4,
    icon: <img src={Respeito} alt="Respeito" width={65}/>,
    titulo: "Respeito",
    texto:
      "Respeitamos cada indivíduo em sua essência, criando tecnologias que honram sua dignidade, fortalecem sua autonomia e atendem às suas necessidades com cuidado.",
  },
  {
    id: 5,
    icon: <img src={Colaboracao} alt="Colaboração" width={65}/>,
    titulo: "Colaboração",
    texto:
      "Acreditamos que grandes avanços nascem do trabalho em conjunto, unindo diferentes perspectivas para desenvolver uma experiência segura, humana e eficaz para nossos usuários.",
  },
];

const NossaBussola = () => {
  return (
    <section className={estilos.secaoBussola}>
      <div className={estilos.container}>
        <h2 className={estilos.tituloPrincipal}>Nossa Bússola</h2>

        <Swiper
          modules={[Navigation]}
          className={estilos.swiperContainer}
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            prevEl: `.${estilos.navPrev}`,
            nextEl: `.${estilos.navNext}`,
          }}
        >
          {valores.map((valor) => (
            <SwiperSlide key={valor.id} className={estilos.swiperSlide}>
              <article className={estilos.cartao}>
                <div className={estilos.iconeWrapper}>{valor.icon}</div>
                <h3>{valor.titulo}</h3>
                <p>{valor.texto}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={estilos.containerNavegacao}>
          <button className={estilos.navPrev} aria-label="Anterior">
            <FaArrowLeft />
          </button>
          <button className={estilos.navNext} aria-label="Próximo">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NossaBussola;
