import React, { Component, useEffect, useState } from "react";
import { getCards } from "../api";

const Card = (props) => {

    const [cards, setCards] = useState([]);
    const [cardError, setCardError] = useState("");

    const fetchCards = async () => {
        try {
            const allCards = await getCards();
            console.log("allCards:", allCards);
            const listCards = allCards.filter(
                (card) => card.list_id === props.tasklistId
            );
            setCards(listCards);
        } catch (err) {
            setCardError(err);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const renderCards = () => {
        if (cards) {
            return cards.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <p>{item.title}</p>
                    </div>
                );
            });
        } else {
            return <div>{cardError}</div>;
        }
    };

    return <div>{renderCards()}</div>;
};

export default Card;
