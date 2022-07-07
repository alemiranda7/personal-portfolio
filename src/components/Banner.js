import React from "react";
import bannerMSG from "../assets/img/bannerMSG.gif";

const Banner = () => {
  return (
    <>
      <div className="containerMSG">
        <div className="boxMSG">
          <p >
            É meu primeiro site. Estou usando o VS Code e estudando pelos cursos
            das plataformas udemy e origamid.
          </p>
          <p>
            Atualmente buscando o caminho de desenvolvedor full-stack com
            experiência em Javascript.
          </p>
          <p>
            Este site vai mostrar o meu progesso ao longo dos cursos e evoluirá
            para um portfólio responsivo, esteticamente agradável e totalmente
            construído! =D
          </p>
          <img className="bannerMSG" src={bannerMSG} />
          <div>
          <footer className="footerMSG">
            Última atualização em 7 de julho de 2022
          </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
