import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
  padding: ${paddingAll};
  `}
  padding-top: 90px;
  `

function PageDefault({children, paddingAll}) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  )
}

PageDefault.propTypes = {
  children: PropTypes.string.isRequired,
  paddingAll: PropTypes.string.isRequired,
};

export default PageDefault;