import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const ClientCreate = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const CREDENTIALS = {
        SUPABASE_URL: "https://kqtwiqsndgwpxnzndjlw.supabase.co/rest/v1",
        SUPABASE_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdHdpcXNuZGd3cHhuem5kamx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODgzNjcsImV4cCI6MTk5NDM2NDM2N30.l59i8Kiao4xCL24htpg96FMtR7gfpXKjER3kRwchBic"
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        // Appel HTTP vers Supabase en method POST
        fetch(CREDENTIALS.SUPABASE_URL + "/customers", {
                method: "POST",
                body: JSON.stringify({ fullName, email }),
                headers: {
                    "Content-Type": "application/json",
                    apiKey: CREDENTIALS.SUPABASE_API_KEY,
                    Prefer: "return=representation",
                },
           })
            // .then((response) => response.json())
            // .then(clients => clients[0])
            .then(() => {
                navigate("/", { replace: true })
        });
    
    }

    const onChangeFullNameHnadler = (event) => {
        setFullName(event.target.value)

    }

    const onChangeEmailHandler = (event) => {
        setEmail(event.target.value)
    }

  return (
    <div>
        <h1>Créer un client</h1>
        <form>
              <div>
                  <input type="text" name="fullName" placeholder="Nom complet" value={fullName} onChange={onChangeFullNameHnadler}/>
              </div>
              <div>
                  <input type="email" name="email" placeholder="email" value={email} onChange={onChangeEmailHandler}/>
              </div>

              <input type="submit" value="Enregistrer" onClick={onSubmitHandler}/>
        </form>
    </div>
  )
}

export default ClientCreate