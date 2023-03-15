import React, { useState, useEffect} from "react"

import { useParams, useNavigate } from "react-router-dom"

const InvoicCreate = () => {
    const [amount, setAmount] = useState(0.0)
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

    const CREDENTIALS = {
        SUPABASE_URL: "https://kqtwiqsndgwpxnzndjlw.supabase.co/rest/v1",
        SUPABASE_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdHdpcXNuZGd3cHhuem5kamx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODgzNjcsImV4cCI6MTk5NDM2NDM2N30.l59i8Kiao4xCL24htpg96FMtR7gfpXKjER3kRwchBic"
    }

    const onSumitHandler = (event) => {
        event.preventDefault()

        // Appel HTTP vers Supabase en method POST
        fetch(CREDENTIALS.SUPABASE_URL + "/invoices", {
            method: "POST",
            body: JSON.stringify({ amount, status, customer_id: id }),
            headers: {
                "Content-Type": "application/json",
                apiKey: CREDENTIALS.SUPABASE_API_KEY,
                Prefer: "return=representation",
            },
        })
            .then((response) => response.json())
            .then(clients => clients[0])
            .then(() => {
                navigate(`/${id}`, { replace: true })
            });
    }

    return (
        <div>
            <h1>Créer une facture</h1>
            <form action="">
                <div>
                    <input type="number" placeholder="Montant de la facture" name="amount" min="0.0" value={amount} onChange={onChangeAmountHandler}/>
                </div>
                
                <div>
                    <select name="status" id="status" defaultValue={status} onChange={onSelectStatusHandler} >
                        <option value="SENT">Envoyée</option>
                        <option value="PAID">Payée</option>
                    </select>
                </div>

                <input type="submit" value="Enregistrer la facture" onClick={onSumitHandler}/>
            </form>
        </div>
  )
}

export default InvoicCreate