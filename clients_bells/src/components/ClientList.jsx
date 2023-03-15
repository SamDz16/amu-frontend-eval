import React from "react"
import ClientListItem from "./ClientListItem"

const ClientList = ({clients}) => {
    return ( <div>
        {clients.map(client => {
            return ( 
                <ClientListItem key={client.id} client={client} />
            )
        })} </div>
    )
}

export default ClientList