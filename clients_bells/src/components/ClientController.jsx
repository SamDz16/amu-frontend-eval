import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ClientList from "./ClientList"

const ClientController = () => {

  const CREDENTIALS = {
    SUPABASE_URL: "https://kqtwiqsndgwpxnzndjlw.supabase.co/rest/v1",
    SUPABASE_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdHdpcXNuZGd3cHhuem5kamx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODgzNjcsImV4cCI6MTk5NDM2NDM2N30.l59i8Kiao4xCL24htpg96FMtR7gfpXKjER3kRwchBic"
  }

  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch(`${CREDENTIALS.SUPABASE_URL}/customers?order=created_at`, {
      headers: {
        apiKey: CREDENTIALS.SUPABASE_API_KEY,
      },
    })
    .then((response) => response.json())
    .then((clients) => {
      setClients([...clients]);
    });
  }, [])

  return <div>
        <h1>Liste des Clients</h1>
        <Link to="/create">Créer un client</Link>
        <ClientList clients={clients} />
    </div>
}

export default ClientController