import React, { useEffect, useState } from "react";
import "./Card.scss";
import { deleteCard } from "../../api";

const Card = (props) => {
    const [formActive, setFormActive] = useState(false);
    const [value, setValue] = useState();
    
    const onUpdate = (e, cardId) => {
        e.preventDefault();
        props.onUpdate(cardId, value);
        setFormActive(false);
    }

    const onDelete = (e) => {
        e.preventDefault();
        props.onDelete(props.id);
        setFormActive(false);
    }

    return (
        <div key={props.id} className="card">
            {!formActive ? (
                <div className="card__cover" onClick={() => setFormActive(!formActive)}></div>
                ) : null
            }
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
                        onClick={(e) => onDelete(e)}
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
