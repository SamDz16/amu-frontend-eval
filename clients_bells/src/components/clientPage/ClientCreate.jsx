import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { addCustomer } from '../../api/http'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ClientCreate = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const onSubmitHandler = (event) => {
        event.preventDefault()

        addCustomer(fullName, email)
        .then(() => navigate("/", { replace: true }));
    }

    const onChangeFullNameHnadler = (event) => {
        setFullName(event.target.value)

    }

    const onChangeEmailHandler = (event) => {
        setEmail(event.target.value)
    }

  return (
      <Container>
        <h1 className="text-center mt-3">Créer un client</h1>
        <Form>
            <Row className="justify-content-md-center">
                <Col lg="2">
                    <Form.Group className="mb-3">
                        <Form.Label>Nom Complet</Form.Label>
                        <Form.Control type="text" name="fullName" placeholder="Nom complet" value={fullName} onChange={onChangeFullNameHnadler} />
                    </Form.Group>
                </Col>

                <Col lg="3">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="email" value={email} onChange={onChangeEmailHandler} />
                    </Form.Group>
                </Col>                                            
            </Row>

            <Row className="justify-content-md-center" lg="3">
                <Button variant="primary" onClick={onSubmitHandler}>
                    Enregistrer
                </Button>
            </Row>
        </Form>
    </Container>
  )
}

export default ClientCreate