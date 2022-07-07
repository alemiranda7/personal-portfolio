import { useState, useEffect, seScroll } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logosvg from '../assets/img/logosvg.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, seScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    if(window.scrollY > 50){
      seScroll(true)
    }else{
      seScroll(false)
    }
  }
  window.addEventListener("scroll", onScroll)

  return () => window.removeEventListener("scroll", onScroll)
}, [])

const onUpdateActiveLink = (value) => {
  setActiveLink(value)
}

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logosvg} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className={activeLink==='home'? 'active-naver-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/sobre" className={activeLink==='sobre'? 'active-naver-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sobre')}>Sobre mim</Nav.Link>
            <Nav.Link href="/habilidades" className={activeLink==='habilidades'? 'active-naver-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
            <Nav.Link href="/projetos" className={activeLink==='projetos'? 'active-naver-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
          </Nav>
          <span className="Nav-bar text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alemiranda7/" target='_blank'>
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/alemiranda7/" target='_blank'>
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
