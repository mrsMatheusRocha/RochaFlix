import React from "react";
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import Footer from "../../components/Footer";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import styled from "styled-components";

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
