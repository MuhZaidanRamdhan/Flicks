import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  position: relative;
  padding: 0 1rem;
  margin: 0 -1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 0px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  width: 100%;
  z-index: 999;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 992px) {
    border-radius: 10px;
    max-width: 1200px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const NavbarBrand = styled.h1`
  font-size: 2.4rem;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    69deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavbarItem = styled(Link)`
  color: #141414;
  text-decoration: none;
  transition: all 200ms;
  cursor: pointer;
  display: none;

  &:focus {
    background: rgb(238, 174, 202);
    background: linear-gradient(
      11deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    background: rgb(238, 174, 202);
    background: linear-gradient(
      11deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
  @media (min-width: 992px) {
    display: block;
  }
`;
const NavbarItemToogleMenu = styled.svg`
  width: 35px;
  height: 35px;
  transitions: all 200ms;

  @media (min-width: 992px) {
    display: none;
  }
`;
const NavbarItemToogleClose = styled.svg`
  width: 40px;
  margin-left: 0.5rem;
  height: 40px;
  transitions: all 200ms;

  @media (min-width: 992px) {
    display: none;
  }
`;

const NavbarAuth = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledNavbarSide = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 99999;
  align-items: flex-start;
  padding: 10px 5px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);

  @media (min-width: 922px) {
    display: none;
  }
`;

const NavbarBrandSide = styled.h1`
  font-size: 2.4rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    69deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const NavbarListSide = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const NavbarItemSide = styled(Link)`
  color: #141414;
  text-decoration: none;
  transition: all 200ms;
  cursor: pointer;
  margin: 0.8rem;
  width: 100%;

  &:focus {
    background: rgb(238, 174, 202);
    background: linear-gradient(
      11deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    background: rgb(238, 174, 202);
    background: linear-gradient(
      11deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavbarAuthSide = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export {
  StyledNavbar,
  Container,
  NavbarBrand,
  NavbarList,
  NavbarAuth,
  NavbarItem,
  NavbarItemToogleMenu,
  NavbarItemToogleClose,
  StyledNavbarSide,
  NavbarBrandSide,
  NavbarListSide,
  NavbarAuthSide,
  NavbarItemSide,
};
