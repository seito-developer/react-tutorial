import React, { useState, useEffect, Component } from "react";
import { getBoards } from "../../api";
import { Link } from "react-router-dom";
import AddTasklist from "../AddTasklist";
import "./Tasklist.scss";

const Tasklist = (props) => {
    const renderTasklists = () => {
        if (props.tasklists) {
            return props.tasklists.map((item) => {
                return (
                    <article className="tasklist__item" key={item.id}>
                        <h2 className="tasklist__heading">{item.title}</h2>
                        <div className="tasklist__cards">

                        </div>
                        <div className="tasklist__btn">
                            
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
