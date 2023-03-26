import { fireEvent, render, screen } from "@testing-library/react";
import ClientCreate from "../src/components/clientPage/ClientCreate";
import React from "react"

// On souhaite s'assurer que lorsque l'utilisateur soumet le formulaire
// il sera ajouté dans la BDD
it("should create client after form submission", async () => {
    // Créons une fausse fonction qui n'appelera donc pas l'API
    // via HTTP
    const mockFunction = jest.fn();

    // On déclenche le rendu du composant ClientCreate en lui confiant
    // notre fausse fonction pour la props onTaskAdded
    render(<ClientCreate />);

    // On simule un événement de changement sur l'<input> dont le placeholder est
    // "Nom complet" et on spécifie le texte qui aurait été tapé par le visiteur
    fireEvent.change(screen.getByPlaceholderText("Nom complet"), {
        target: { value: "MOCK_TEXT_FULL_NAME" }
    });
    // On simule un événement de changement sur l'<input> dont le placeholder est
    // "Nom complet" et on spécifie le texte qui aurait été tapé par le visiteur
    fireEvent.change(screen.getByPlaceholderText("email"), {
        target: { value: "MOCK_TEXT_FULL_NAME@gmail.co" }
    });

    // On simule ensuite un click sur le bouton dont le texte est "Enregistrer"
    // Ce qui devrait déclencher le submit du formulaire
    fireEvent.click(screen.getByText("Enregistrer"));

    // On veut s'assurer alors que la fonction qui doit prendre en charge
    // Cette nouvelle tâche est bien appelée ET qu'elle est appelée
    // avec pour paramètre le texte présent dans l'<input>
    expect(mockFunction).toHaveBeenCalledWith("MOCK_TEXT_FULL_NAME", "MOCK_TEXT_FULL_NAME@gmail.co");
})