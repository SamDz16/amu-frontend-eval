import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ClientList from "./ClientList"

import { fetchCustomers } from '../../api/http'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const ClientController = () => {

  const [clients, setClients] = useState([])

  useEffect(() => {
    fetchCustomers()
      .then(clients => setClients([...clients]))
  }, [])

  return <Container>
        <h1 className="text-center mt-3">Liste des Clients</h1>
        <Button className="d-block text-center" variant="link">
          <Link to="/create">Créer un client</Link>
        </Button>

        <hr />
        
        <ClientList clients={clients} />
    </Container>
}

export default ClientController