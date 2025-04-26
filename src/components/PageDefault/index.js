import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 100px;
  padding-left: 5%;
  padding-right: 5%;
`

function PageDefault({children}) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}

PageDefault.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageDefault;