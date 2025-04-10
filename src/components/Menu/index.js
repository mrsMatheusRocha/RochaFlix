import React from 'react';
import Logo from '../../assets/images/rochaflix.png';
import { LogoImage, MenuWrapper } from './styles';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={Logo} alt="Logo da RochaFlix"/>
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </MenuWrapper>
  )
}

export default Menu;