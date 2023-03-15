import React from "react"
import { Link, useNavigate } from "react-router-dom"

const ClientListItem = ({client}) => {
  const navigate = useNavigate()

  const onClickClientHandler = () => {
    navigate(`/${+client.id}`, { replace: true })
  }

  return (
        <div onClick={onClickClientHandler}>
            <p>{client.fullName} {client.email}</p>
            <Link to={`/${+client.id}`}>Détails</Link>
        </div>
  )
}

export default ClientListItem