import React, { useState } from "react"

import { useParams, useNavigate } from "react-router-dom"

import { addInvoice } from '../../api/http'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const InvoicCreate = () => {
    const [amount, setAmount] = useState('')
    const [status, setStatus] = useState("sent")

    const params = useParams()
    const id = +params.id

    const navigate = useNavigate()

    const onChangeAmountHandler = (event) => {
        setAmount(+event.target.value)
    }

    const onSelectStatusHandler = (event) => {
        setStatus(event.target.value.toLowerCase())
    }

    const onSumitHandler = (event) => {
        event.preventDefault()

        addInvoice(amount, status, id)
            .then(() => navigate(`/${id}`, { replace: true }))
    }

    return (
        <Container>
            <h1 className="text-center">Créer une facture</h1>
            <Form>
                <Row className="justify-content-md-center">
                    <Col lg="3">
                        <Form.Group className="mb-3">
                            <Form.Label>Montant de la facture</Form.Label>
                            <Form.Control type="number" placeholder="Montant de la facture" name="amount" min="0.0" step="0.1" value={amount} onChange={onChangeAmountHandler} />
                        </Form.Group>
                    </Col>

                    <Col lg="2">
                        <Form.Group className="mb-3">
                            <Form.Label>Montant de la facture</Form.Label>
                            <Form.Select name="status" id="status" defaultValue={status} onChange={onSelectStatusHandler}>
                                <option value="SENT">Envoyée</option>
                                <option value="PAID">Payée</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" lg="3">
                    <Button variant="success" onClick={onSumitHandler}>
                        Enregistrer la facture
                    </Button>
                </Row>
            </Form>
        </Container>
  )
}

export default InvoicCreate