import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import InvoicesList from "../invoicePage/InvoicesList"
import { getCustomerById, getCustomerInvoices } from "../../api/http"

import Container from 'react-bootstrap/Container'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const ClientListItemDetails = () => {

  const [client, setClient] = useState({})
  const [invoices, setInvoices] = useState([])

  const params = useParams()
  const id = +params.id

  useEffect(() => {
    getCustomerById(id)
      .then(client => setClient({ ...client }))

    getCustomerInvoices(id)
      .then(invoices => setInvoices([...invoices]))
  }, [])

  return (
    <Container>
      <h1 className="text-center mt-3">Fiche de {client.fullName} </h1>
      <p className="text-muted">({client.email})</p>

      <InvoicesList invoices={invoices} />

      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="link">
            <Link to="/">Retour aux clients</Link>
          </Button> 
          <Button variant="link">
            <Link to={`/${id}/invoices/add`}>Créer une facture</Link>
          </Button> 
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  )
}

export default ClientListItemDetails