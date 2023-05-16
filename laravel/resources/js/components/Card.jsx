import React, { Component, useEffect, useState } from "react";
import { getCards } from "../api";

const Card = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      console.log('props.cardData:', props.cardData);
        const listCards = props.cardData.filter(
            (card) => card.list_id === props.tasklistId
        );
        setCards(listCards);
    }, []);

    return (
        <div>
            {cards.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <p>{item.title}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
