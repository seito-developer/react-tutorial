import React, { useEffect, useState } from "react";
import "./Card.scss";
import { deleteCard } from "../../api";

const Card = (props) => {
    const [formActive, setFormActive] = useState(false);
    const [value, setValue] = useState();
    
    const onUpdate = (e, cardId) => {
        e.preventDefault();
        props.onUpdate(cardId, value);
    }

    return (
        <div key={props.id} className="card" onClick={() => setFormActive(!formActive)}>
            <p>{props.title}</p>
            {formActive ? (
                <div className="card__form">
                    <form
                        className="card__form-inner"
                        onSubmit={(e) => onUpdate(e, props.id)}
                    >
                        <input
                            type="text"
                            defaultValue={props.title}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button type="submit">Update</button>
                    </form>
                    <button
                        type="button"
                        onClick={() => props.onDelete(props.id)}
                    >
                        Delete
                    </button>
                </div>
            ) : null}
            {props.cardError ? <p> {props.cardError} </p> : null}
        </div>
    );
};

export default Card;
