import React, { useEffect, useState } from "react";
import "./Card.scss";
import { deleteCard } from "../../api";

const Card = (props) => {
    const [cards, setCards] = useState([]);
    const [active, setActive] = useState(false);
    const [value, setValue] = useState();

    useEffect(() => {
        const listCards = props.cardData.filter(
            (card) => card.list_id === props.tasklistId
        );
        setCards(listCards);
    }, [props.cardData]);
    
    const onUpdate = (e, cardId) => {
        e.preventDefault();
        props.onUpdate(cardId, value);
    }

    return (
        <div className="card">
            {cards.map((item) => {
                return (
                    <div key={item.id} className="card-item" onClick={() => setActive(!active)}>
                        <p>{item.title}</p>
                        {active ? (
                            <div className="card__form">
                                <form
                                    className="card__form-inner"
                                    onSubmit={(e) => onUpdate(e, item.id)}
                                >
                                    <input
                                        type="text"
                                        defaultValue={item.title}
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                    <button type="submit">Update</button>
                                </form>
                                <button
                                    type="button"
                                    onClick={() => props.onDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ) : null}
                        {props.cardError ? <p> {props.cardError} </p> : null}
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
