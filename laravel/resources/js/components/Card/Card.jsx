import React, { useEffect, useState } from "react";
import "./Card.scss";

const Card = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const listCards = props.cardData.filter(
            (card) => card.list_id === props.tasklistId
        );
        setCards(listCards);
    }, [props.cardData]);

    return (
        <div className="card">
            {cards.map((item) => {
                return (
                    <div key={item.id} className="card-item">
                        <p>{item.title}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
