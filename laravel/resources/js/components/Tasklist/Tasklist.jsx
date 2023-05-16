import React, { useState, useEffect, Component } from "react";
import { getBoards, getCards } from "../../api";
import { Link } from "react-router-dom";
import AddTasklist from "../AddTasklist";
import "./Tasklist.scss";
import AddCard from "../AddCard";
import Card from "../Card";

const Tasklist = (props) => {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
            const allCards = await getCards();
            const listCards = allCards.filter(
                (card) => card.list_id === listId
            );
            setCards(listCards);
        } catch (err) {
            setError(err);
        }
    };

    const handleCardAdded = (newCard) => {
        setCards([...cards, newCard]);
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
                            <Card cards={cards} />
                        </div>
                        <div className="tasklist__btn">
                            <AddCard listId={item.id} onAddCard={handleCardAdded} />
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
