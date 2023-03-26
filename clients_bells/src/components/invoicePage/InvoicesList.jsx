import React from 'react'

import Table from "react-bootstrap/Table"

const InvoicesList = ({ invoices }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Montant</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map((invoice, idx) => {
                    return (
                        <tr key={invoice.id}>
                            <td>{idx}</td>
                            <td>{invoice.amount}</td>
                            <td>{invoice.status.toLowerCase() === 'paid' ? 'Payée' : "Envoyée"}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default InvoicesList