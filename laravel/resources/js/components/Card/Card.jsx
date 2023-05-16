import React, { useEffect, useState } from "react";
import "./Card.scss";
import { deleteCard } from "../../api";

const Card = (props) => {
    const [cards, setCards] = useState([]);
    const [active, setActive] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const listCards = props.cardData.filter(
            (card) => card.list_id === props.tasklistId
        );
        setCards(listCards);
    }, [props.cardData]);

    const handleUpdateCard = () => {};
    const onDelete = async (cardId) => {
        props.onDelete(cardId);
    };

    return (
        <div className="card">
            {cards.map((item) => {
                return (
                    <div key={item.id} className="card-item">
                        <p>{item.title}</p>
                        {active ? (
                            <div className="card__form">
                                <form
                                    className="card__form-inner"
                                    onSubmit={handleUpdateCard}
                                >
                                    <input
                                        type="text"
                                        defaultValue={item.title}
                                    />
                                    <button type="submit">Update</button>
                                </form>
                                <button
                                    type="button"
                                    onClick={() => onDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ) : null}
                        {error ? <p> {error} </p> : null}
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
