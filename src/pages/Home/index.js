import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import categoriasRepository from "../../repositories/categoria.js";
import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllVideos()
      .then((categoriasVideos) => {
        if (categoriasVideos && categoriasVideos.length > 0) {
          console.log(categoriasVideos);
          setDadosIniciais(categoriasVideos);
        } else {
          console.error("A API não retornou dados válidos.");
        }
      })
      .catch((err) => {
        console.error("Erro ao carregar os vídeos:", err);
      });
  }, []);

  return (
    <PageDefault>
      <Menu />
      {dadosIniciais.length === 0 && (<div>Carregando...</div>)}



      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
