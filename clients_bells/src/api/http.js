/**
 * Permet de récupérer la liste des clients de l'API
 * @returns Promise<{id: number, fullName: string, email: string, created_at: datetime}>
 */
export const fetchCustomers = () => {
    return fetch(`${process.env.REACT_APP_SUPABASE_URL}/customers?order=created_at`, {
        headers: {
            apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
        },
    })
    .then((response) => response.json())
    .then((clients) => clients)
}

/**
 * Permet de rajouter un client dans l'API
 * @returns Promise<{id: number, fullName: string, email: string, created_at: datetime}>
 */
export const addCustomer = (fullName, email) => {
    return fetch(process.env.REACT_APP_SUPABASE_URL + "/customers", {
        method: "POST",
        body: JSON.stringify({ fullName, email }),
        headers: {
            "Content-Type": "application/json",
            apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
}

/**
 * Permet de récupérer un client par son id de l'API
 * @param {number} customerId
 * @returns Promise<{id: number, fullName: string, email: string, created_at: datetime}>
 */
export const getCustomerById = (customerId) => {
    return fetch(`${process.env.REACT_APP_SUPABASE_URL}/customers?id=eq.${customerId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
    .then(response => response.json())
    .then(client => client[0])
}

/**
 * Permet de récupérer la liste des factures d'un client donné de l'API
 * @param {number} customerId
 * @returns Promise<{id: number, amount: number, status: boolean, customer_id: number, created_at: datetime}>
 */
export const getCustomerInvoices = (customerId) => {
    return fetch(`${process.env.REACT_APP_SUPABASE_URL}/invoices?customer_id=eq.${customerId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
    .then(response => response.json())
    .then(invoices => invoices)
}

/**
 * Permet de récupérer la liste des factures d'un client donné de l'API
 * @param {number} amount
 * @param {status} boolean
 * @param {number} customerId
 * @returns Promise<{id: number, amount: number, status: boolean, customer_id: number, created_at: datetime}>
 */
export const addInvoice = (amount, status, customerId) => {
    return fetch(process.env.REACT_APP_SUPABASE_URL + "/invoices", {
        method: "POST",
        body: JSON.stringify({ amount, status, customer_id: customerId }),
        headers: {
            "Content-Type": "application/json",
            apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
    .then((response) => response.json())
    .then(clients => clients[0])
}