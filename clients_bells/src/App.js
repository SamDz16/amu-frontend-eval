import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientController from "./components/ClientController";
import ClientCreate from "./components/ClientCreate";
import ClientListItemDetails from "./components/ClientListItemDetails";
import InvoicCreate from "./components/InvoicCreate";

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
