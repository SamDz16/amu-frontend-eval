import React from 'react'

const InvoicesList = ({ invoices }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Montant</th>
                        <th>Statut</th>
                    </tr>
                </thead>

                <tbody>
                    {invoices.map(invoice => {
                        return (
                            <tr key={invoice.id}>
                                <td>{invoice.amount}</td>
                                <td>{invoice.status.toLowerCase() === 'paid' ? 'Payée' : "Envoyée"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default InvoicesList