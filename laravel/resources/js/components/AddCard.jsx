import React, { useState } from "react";
import { createCard } from "../api";

const AddCard = ({ tasklistId, onAddCard }) => {
    const [title, setTitle] = useState("");

    const handleAddCard = async (e) => {
        e.preventDefault();
        if (title) {
            const newCard = await createCard(title, tasklistId);
            onAddCard(newCard);
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleAddCard}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new card"
            />
            <button type="submit">Add Card</button>
        </form>
    );
};

export default AddCard;
