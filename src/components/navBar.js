import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={'https://w7.pngwing.com/pngs/413/15/png-transparent-hyundai-motor-company-logo-hyundai-starex-hyundai-entourage-hyundai-blue-white-text.png'}></img> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>
          <span>
              <a href='https://www.linkedin.com/login/ar'><img src={'https://thumbs.dreamstime.com/b/linkedin-vector-circular-blue-icon-linkedin-vector-circular-blue-icon-social-media-icon-website-mobile-apps-183034665.jpg'} alt='limkedin'></img> </a>
              <a href='https://www.facebook.com/?locale=ar_AR'><img src={'https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png'} alt='facebook'></img> </a>
              <a href='https://www.instagram.com/?hl=ar'><img src={'https://static.vecteezy.com/system/resources/thumbnails/042/148/632/small/instagram-logo-instagram-social-media-icon-free-png.png'} alt='instagram'></img> </a>
          </span>
          <button onclick={()=>console.log('pressed')
          }>

              <span>Let's Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;