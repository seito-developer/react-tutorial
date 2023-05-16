import React, { useState, useEffect, Component } from "react";

import { Link } from "react-router-dom";
import "./Tasklist.scss";
import AddCard from "../AddCard/AddCard";
import CardList from "../CardList/CardList";
import { deleteCard, getCards, updateCard } from "../../api";

const Tasklist = (props) => {
    const [allCards, setAllCards] = useState([]);
    const [allCardsError, setAllCardsError] = useState();
    const [cardError, setCardError] = useState();

    const fetchCards = async () => {
        try {
            const allCards = await getCards();
            setAllCards(allCards);
        } catch (err) {
            setAllCardsError(err);
        }
    };

    const handleCardAdded = (newCard) => {
        setAllCards([...allCards, newCard]);
        fetchCards();
    };

    const handleDeleteCard = async (cardId) => {
        try {
            await deleteCard(cardId);
            fetchCards();
        } catch (err) {
            setCardError(err);
        }
    };

    const handleUpdateCard = async (cardId, title) => {
        try {
            await updateCard(cardId, {
                title: title
            });
            fetchCards();
        } catch (err) {
            setCardError(err);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const renderTasklists = () => {
        if (props.tasklists) {
            return props.tasklists.map((item) => {
                return (
                    <article className="tasklist__item" key={item.id}>
                        <h2 className="tasklist__heading">{item.title}</h2>
                        <div className="tasklist__cards">
                            {!allCardsError ? (
                                <CardList
                                    cardData={allCards}
                                    tasklistId={item.id}
                                    onUpdate={handleUpdateCard}
                                    onDelete={handleDeleteCard}
                                    cardError={cardError}
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
