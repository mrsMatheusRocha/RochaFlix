import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  }

  const {handleChange, values, clearForm} = useForm(valoresIniciais)
  
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = "https://my-json-server.typicode.com/mrsMatheusrocha/rochaflix/db";
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([
          ...resposta.categorias,
        ]);
      })
  });

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        clearForm();
      }}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.nome}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>
      
      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;