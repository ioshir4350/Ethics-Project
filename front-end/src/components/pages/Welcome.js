import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'

const Welcome = () => {

    const [username, setUsername] = useState('')

    const nameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const submitHandler = () => {
        localStorage.setItem('username', username)
        localStorage.setItem('points', '0')
        
        
        window.location = '/page/intro'
    }

    const enter = (event) => {
        if (event.keyCode == 13){
            submitHandler()
        }
    }

    return (
        <div>
            <video autoPlay muted loop
            style={{
                width: '100%', position: 'absolute',
                left: '50%', top: '50%', height: '100%',
                objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: "-1"
            }}>
                <source src="videos/mainscreenvid.mp4" type="video/mp4"/>
            </video>
            <div className="title">
                <h1 className="title-text">Autonomous Cars: What is Your Choice?</h1>
                <Container>
                    <Row>
                        <Col style={{paddingTop: '10px'}}>
                            <input onKeyDown={enter} onChange={nameChangeHandler} style={{width: '250px', height: '50px', paddingLeft:'10px'}} autoFocus placeholder="Please enter your name"/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col style={{paddingTop: '10px'}}>
                            <Button onClick={submitHandler}>Submit</Button>
                        </Col>
                    </Row>
                </Container>
                
                
            </div>
        </div>
    )
}

export default Welcome