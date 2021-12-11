import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/esm/Container'
const NavBar = () => {

    const newGame = () => {
        localStorage.clear()
        window.location = '/'
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Auto or Manual</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Graph of Car A</Nav.Link>
                    <Nav.Link href="#pricing">Graph of Car B</Nav.Link>
                    <Nav.Link href="/page/credits">Credits</Nav.Link>
                    <Nav.Link href="#pricing">Summary</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link onClick={newGame}>
                        New Game
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar