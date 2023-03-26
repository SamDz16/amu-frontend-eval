import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientController from "./components/clientPage/ClientController";
import ClientCreate from "./components/clientPage/ClientCreate";
import ClientListItemDetails from "./components/clientPage/ClientListItemDetails";
import InvoicCreate from "./components/invoicePage/InvoicCreate";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route 
        path="/"
        element={<ClientController />}
      />

      <Route
        path="/:id"
        element={<ClientListItemDetails />}
      />

      <Route
        path="/create"
        element={<ClientCreate />}
      />

      <Route
        path="/:id/invoices/add"
        element={<InvoicCreate />}
      />
    </Routes>
  </BrowserRouter>
}

export default App
