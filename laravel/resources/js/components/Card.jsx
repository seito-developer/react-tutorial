import React, { Component, useEffect } from "react";

const Card = (props) => {
  useEffect(()=>{
    console.log('card props:', props);
  },[])
    const renderCards = () => {
        if (props.cards) {
            return props.cards.map((item) => {
                return (
                    <div className="card">
                        <p>{item.title}</p>
                    </div>
                );
            });
        } else {
            return <div>{props.error}</div>;
        }
    };

    return <div>{renderCards()}</div>;
};

export default Card;
