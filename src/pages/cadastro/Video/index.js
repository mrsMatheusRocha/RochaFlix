import React, { useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/Button";
import FormField from "../../../components/FormField";
import categoriasRepository from "../../../repositories/categoria";
import videosRepository from "../../../repositories/videos";
import styled from "styled-components";

const DivLink = styled.div`
  display: flex;
  justify-content: space-between;
`;

const linkStyle = {
    border: "1px solid white",
    color: "white",
    backgroundColor: "black",
    boxSizing: "border-box",
    cursor: "pointer",
    padding: "16px 24px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    outline: "none",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    transition: "opacity .3s",
    marginBottom: "20px"
  };


function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: "Video padrão",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c",
    categoria: "Front End",
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log("Cadastrou com sucesso!");
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <DivLink>
        <Button type="submit">
          Cadastrar
        </Button>
          <Link
            to="/cadastro/categoria" 
            style={linkStyle}
          >
            Cadastrar Categoria
          </Link>
        </DivLink>
      </form>

    </PageDefault>
  );
}

export default CadastroVideo;