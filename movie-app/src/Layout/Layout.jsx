import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container";

function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  );
}

export default Layout;
