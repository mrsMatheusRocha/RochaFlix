import React from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Texts = styled.div`
  text-align: center;
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

function Pagina404() {
  return (
    <PageDefault>
      <Texts>
        <h1>Error 404</h1>
        <Link 
          to="/"
          style={linkStyle}
        >
          Voltar para a Home
        </Link>
        <h2>Volte para a Home ou jogue o joguinho abaixo xD</h2>
      </Texts>
      <iframe
        title="Flappy Bird Game"
        src="https://mrsmatheusrocha.github.io/FlappyBird/"
        width="340"
        height="475" 
        style={{
          display: "flex",
          margin: "0 auto",
          marginBottom: "20px"
        }}
      />
    </PageDefault>
  )
}

export default Pagina404;