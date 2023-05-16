import React, { useState, useEffect, Component } from "react";

import { Link } from "react-router-dom";
import "./Tasklist.scss";
import AddCard from "../AddCard/AddCard";
import Card from "../Card/Card";
import { getCards } from "../../api";

const Tasklist = (props) => {
    const [allCards, setAllCards] = useState([]);
    const [cardError, setCardError] = useState();

    const fetchCards = async () => {
        try {
            const allCards = await getCards();
            setAllCards(allCards);
        } catch (err) {
            setCardError(err);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const handleCardAdded = (newCard) => {
        setAllCards([...allCards, newCard]);
        fetchCards();
    };

    const renderTasklists = () => {
        if (props.tasklists) {
            return props.tasklists.map((item) => {
                return (
                    <article className="tasklist__item" key={item.id}>
                        <h2 className="tasklist__heading">{item.title}</h2>
                        <div className="tasklist__cards">
                            {!cardError ? (
                                <Card
                                    cardData={allCards}
                                    tasklistId={item.id}
                                />
                            ) : null}
                        </div>
                        <div className="tasklist__btn">
                            <AddCard
                                tasklistId={item.id}
                                onAddCard={handleCardAdded}
                            />
                        </div>
                    </article>
                );
            });
        } else {
            return <li>{props.error}</li>;
        }
    };

    return <div className="tasklist">{renderTasklists()}</div>;
};

export default Tasklist;
