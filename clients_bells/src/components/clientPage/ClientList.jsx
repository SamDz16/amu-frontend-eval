import React from "react"
import ClientListItem from "./ClientListItem"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ClientList = ({clients}) => {

    return (
        <Container>
            <Row className="justify-content-md-center" >
                {clients.map(client => {
                    return (
                        <ClientListItem key={client.id} client={client} />
                    )
                })} 
            </Row>
           
        </Container>
    )
}

export default ClientList