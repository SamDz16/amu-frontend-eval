import {
    // Permet de déclencher le rendu d'un composant
    render,
    // Permet de déclencher un événement dans l'interface
    fireEvent,
    // Permet d'aller chercher des éléments sur un "écran" virtuel
    screen
} from '@testing-library/react'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ClientList from '../src/components/clientPage/ClientList'

// Suite de tests pour le composant ClientList
describe("ClientList Component", () => {
    // Dans ce premier test, on veut s'assurer que le composant
    // affichera bien les clients qu'on lui donne via les props
    it("should render clients given in props", async () => {
        // On créé un tableau arbitraire de tâches
        const clients = [
            { id: 1, fullName: 'MOCK_TASK_client_1', email: "client.1@gmail.com" },
            { id: 2, text: 'MOCK_TASK_client_2', email: "clinet.2@gmail.com" },
        ];

        // On déclenche le rendu du composant, en s'assurant
        // de l'envelopper dans un BrowserRouter car il contient
        // des fonctionnalités (<Link>) liées à React Router
        render(<BrowserRouter>
                <ClientList clients={clients} />
            </BrowserRouter>
        );

        // On recherche sur l' "écran" tous les éléments qui contiennent
        // le texte "MOCK_TASK"
        const items = await screen.getAllByText("MOCK_TASK", { exact: false });

        // On s'attend à avoir trouvé autant d'éléments que
        // de clients dans le tableau passé
        expect(items).toHaveLength(clients.length);
    })

    // Dans ce deuxième test, on veut s'assurer qu'un click sur
    // tâche déclenchera bien la fonction "onClickClientHandler"
    it("should call onClickClientHandler on a click", async () => {
        // On créé un tableau arbitraire de clients
        const clients = [
            { id: 1, fullName: 'MOCK_TASK_client_1', email: "client.1@gmail.com" },
            { id: 2, text: 'MOCK_TASK_client_2', email: "clinet.2@gmail.com" },
        ];

        // On créé une "fausse" fonction, qui nous permettra
        // de l'espionner et de savoir si elle a été appelée ou pas
        const mockFunction = jest.fn();

        // On déclenche le rendu en donnant notre fausse fonction
        // à onClickClientHandler
        render(<BrowserRouter>
            <ClientList clients={clients} onClickClientHandler={mockFunction} />
        </BrowserRouter>);

        // On simule un click sur la tâche 1
        fireEvent.click(screen.getByText('MOCK_TASK_client_1'));

        // On s'attend à ce que la fausse fonction ait été appelée
        expect(mockFunction).toHaveBeenCalled();
    })
})