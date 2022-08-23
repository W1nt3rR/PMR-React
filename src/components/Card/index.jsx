import React from "react";
import style from "./card.module.scss";

export const Card = (props) => {

    const { type, direction = "" } = props;

    return <div className={`${style.card} ${style[type]} ${style[direction]}`}>
        {props.children}
    </div>
}