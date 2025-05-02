import React from "react";
import Menu from "../../components/Menu";
// import categoriasRepository from "../../repositories/categoria.js";
import dadosIniciais from "../../data/dados_iniciais.json";
import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";


function Home() {
  // const [dadosIniciais, setDadosIniciais] = useState([]);

  // useEffect(() => {
  //   categoriasRepository.getAllVideos()
  //     .then((categoriasVideos) => {
  //       setDadosIniciais(categoriasVideos);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <PageDefault paddingAll={0}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />  
    </PageDefault>
  );
}

export default Home;
