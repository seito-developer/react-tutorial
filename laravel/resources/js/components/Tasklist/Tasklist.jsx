import React, { useState, useEffect, Component } from "react";

import { Link } from "react-router-dom";
import AddTasklist from "../AddTasklist";
import "./Tasklist.scss";
import AddCard from "../AddCard";
import Card from "../Card";

const Tasklist = (props) => {
    const [cards, setCards] = useState([]);
    const [cardError, setCardError] = useState("");

    const handleCardAdded = (newCard) => {
        setCards([...cards, newCard]);
    };

    const renderTasklists = () => {
        if (props.tasklists) {
            return props.tasklists.map((item) => {
                return (
                    <article className="tasklist__item" key={item.id}>
                        <h2 className="tasklist__heading">{item.title}</h2>
                        <div className="tasklist__cards">
                            <Card 
                                tasklistId={item.id} 
                                cards={cards} 
                                setCards={setCards}
                                cardError={cardError}
                                setCardError={setCardError}
                             />
                        </div>
                        <div className="tasklist__btn">
                            <AddCard tasklistId={item.id} onAddCard={handleCardAdded} />
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
