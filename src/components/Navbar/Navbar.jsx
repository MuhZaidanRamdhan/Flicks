import { useState } from "react";
import {
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
} from "./Navbar.styled";

function Navbar() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);


  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };
  return (
    <Container>
      <StyledNavbar>
        <NavbarBrand>Flicks</NavbarBrand>
        <NavbarList>
          <NavbarItem to="/">Home</NavbarItem>
          <NavbarItem to="/movie/create">Add Movie</NavbarItem>
          <NavbarItem to="/movie/popular">Popular</NavbarItem>
          <NavbarItem to="/movie/now">Now Playing</NavbarItem>
          <NavbarItem to="/movie/top">Top Rated</NavbarItem>
        </NavbarList>
        <NavbarAuth>
          <NavbarItem to="">Sign in</NavbarItem>
          <NavbarItem to="">Sign up</NavbarItem>
        </NavbarAuth>
        <NavbarItemToogleMenu onClick={showSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#5f6368"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </NavbarItemToogleMenu>
      </StyledNavbar>
      {/* SideBar */}
      {isSidebarVisible && (
        <StyledNavbarSide>
          <NavbarItemToogleClose onClick={hideSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#5f6368"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </NavbarItemToogleClose>
          <NavbarListSide>
            <NavbarItemSide to="/">Home</NavbarItemSide>
            <NavbarItemSide to="/movie/create">Add Movie</NavbarItemSide>
            <NavbarItemSide to="/movie/popular">Popular</NavbarItemSide>
            <NavbarItemSide to="/movie/now">Now Playing</NavbarItemSide>
            <NavbarItemSide to="/movie/top">Top Rated</NavbarItemSide>
          </NavbarListSide>
          <NavbarAuthSide>
            <NavbarItemSide to="">Sign in</NavbarItemSide>
            <NavbarItemSide to="">Sign up</NavbarItemSide>
          </NavbarAuthSide>
        </StyledNavbarSide>
      )}

    </Container>
  );
}

export default Navbar;
