import React from "react"
import { Link, useNavigate } from "react-router-dom"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const ClientListItem = ({client}) => {
  const navigate = useNavigate()

  const onClickClientHandler = () => {
    navigate(`/${+client.id}`, { replace: true })
  }

  return (
     <Col lg="4" className="mb-3">
      <Card onClick={onClickClientHandler}>
        <Card.Body>
          <Card.Title>{client.fullName}</Card.Title>
          <Card.Text>
            Pour plus de détails, veuillez cliquer sur le lien en dessous.
          </Card.Text>
          <p className="text-muted">{new Date(client.created_at).getDate()}-{new Date(client.created_at).getMonth()+1}-{new Date(client.created_at).getFullYear()} </p>
        </Card.Body>
        <Card.Footer>
          <Button variant="link">
            <Link className="text-muted" to={`/${+client.id}`}>Détails</Link>
          </Button>
        
        </Card.Footer>
      </Card>
     </Col>
  )
}

export default ClientListItem