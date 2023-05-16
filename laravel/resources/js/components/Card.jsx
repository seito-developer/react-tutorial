import React, { Component, useEffect } from "react";
import { getCards } from "../api";

const Card = (props) => {
    const fetchCards = async () => {
        try {
            const allCards = await getCards();
            console.log("allCards:", allCards);
            const listCards = allCards.filter(
                (card) => card.list_id === props.tasklistId
            );
            props.setCards(listCards);
        } catch (err) {
            props.setCardError(err);
        }
    };

    useEffect(() => {
        fetchCards();
        console.log("card props:", props);
    }, []);

    const renderCards = () => {
        if (props.cards) {
            return props.cards.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <p>{item.title}</p>
                    </div>
                );
            });
        } else {
            return <div>{props.cardError}</div>;
        }
    };

    return <div>{renderCards()}</div>;
};

export default Card;
