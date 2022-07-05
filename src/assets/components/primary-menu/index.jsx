import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PrimaryMenu = () => {
  const [servicesIsClicked, setServicesIsClicked] = useState(false);

  console.log(servicesIsClicked);

  return (
    <Menu>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>Sobre</li>
      <ServicesItem onClick={() => setServicesIsClicked(!servicesIsClicked)}>
        <NameAndExpandIcon>
          <Link to="/">Serviços</Link>
          <MdExpandMore />
        </NameAndExpandIcon>

        <SubMenu isClicked={servicesIsClicked}>
          <li>
            <Link to="/aulas-de-musica">Aulas de Música</Link>
          </li>
          <li>
            <Link to="/musicoterapia">Musicoterapia</Link>
          </li>
          <li>
            <Link to="/palestras">Palestras</Link>
          </li>
        </SubMenu>
      </ServicesItem>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </Menu>
  );
};

export const Menu = styled.ul`
  display: flex;
  position: relative;
  gap: 30px;
  font-weight: 400;
`;

export const ServicesItem = styled.li``;

export const NameAndExpandIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SubMenu = styled.ul`
  color: red;
  position: absolute;
  ${({ isClicked }) => (isClicked ? { display: "block" } : { display: "none" })}
`;
