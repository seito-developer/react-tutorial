import React, { useEffect, useState } from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const listCards = props.cardData.filter(
            (card) => card.list_id === props.tasklistId
        );
        setCards(listCards);
    }, [props.cardData]);

    return (
        <div className="card-list">
            {cards.map((item) => {
                return (
                  <Card
                    id={item.id}
                    title={item.title}
                    onUpdate={props.onUpdate}
                    onDelete={props.onDelete}
                    cardError={props.cardError}
                    />  
                );
            })}
        </div>
    );
};

export default CardList;
