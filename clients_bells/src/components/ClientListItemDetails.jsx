import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import InvoicesList from "./InvoicesList"

const ClientListItemDetails = () => {

  const [client, setClient] = useState({})
  const [invoices, setInvoices] = useState([])

  const params = useParams()
  const id = +params.id

  const CREDENTIALS = {
    SUPABASE_URL: "https://kqtwiqsndgwpxnzndjlw.supabase.co/rest/v1",
    SUPABASE_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdHdpcXNuZGd3cHhuem5kamx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODgzNjcsImV4cCI6MTk5NDM2NDM2N30.l59i8Kiao4xCL24htpg96FMtR7gfpXKjER3kRwchBic"
  }
  
  useEffect(() => {
    fetch(`${CREDENTIALS.SUPABASE_URL}/customers?id=eq.${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKey: CREDENTIALS.SUPABASE_API_KEY,
        Prefer: "return=representation",
      }
    })
      .then(response => response.json())
      // La réponse contenant un tableau des tâches correspondantes
      // Nous ne retournons que la première (et la seule)
      .then(client => {
        setClient({...client[0]})
      })

    fetch(`${CREDENTIALS.SUPABASE_URL}/invoices?customer_id=eq.${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKey: CREDENTIALS.SUPABASE_API_KEY,
        Prefer: "return=representation",
      }
    })
      .then(response => response.json())
      // La réponse contenant un tableau des tâches correspondantes
      // Nous ne retournons que la première (et la seule)
      .then(invoices => {
        setInvoices([...invoices])
      });
  }, [])

  return (
    <div>
      <h1>Fiche de {client.fullName} </h1>
      <p>({client.email})</p>

      <InvoicesList invoices={invoices} />

      <Link to="/">Retour aux clients</Link> <br />
      <Link to={`/${id}/invoices/add`}>Créer une facture</Link>
    </div>
  )
}

export default ClientListItemDetails