import NavBar from "../shared/NavBar"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

const Summary = () => {
    return (
        <div>
            <NavBar />
            <h1 style={{marginTop: '50px', paddingBottom: '60px'}}>Summary</h1>
            <Container>
                <Row>
                    <Col style={{borderRight: 'solid black'}}>
                        <h1>Car A</h1>
                        <p>
                        With the RedRox company car the options that are present include the autonomous choice of having the car run by itself as well as a manual option for the user to drive. The autonomous option of having the car run has particular benefits which include the driver not needing to make decisions that are common within a driving scenario whilst also allowing the car to abide by the law. The issues, however, stem from the fact that the outcomes are not always optimal in terms of timing. Manual driving has its share of pros due to the users being able to make decisions to get to a location quickly and being able to save time but in the cost of having the user going against particular driving laws and regulations which could lead to potential accidents and or legal consequences. 
                        </p>
                    </Col>
                    <Col>
                        <h1>Car B</h1>
                        <p>
                        Autarchic, can run by itself as Car A, RedRox, but Autarchic was programmed more based on safety than RedRox. By setting the max speed, drivers can control more over the decision their cars make, and Autarchic cars also automatically park and roam. 
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Summary