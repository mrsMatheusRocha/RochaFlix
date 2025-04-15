import React from 'react';
import Logo from '../../assets/images/rochaflix.png';
import { LogoImage, MenuWrapper } from './styles';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="Logo da RochaFlix"/>
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  )
}

export default Menu;