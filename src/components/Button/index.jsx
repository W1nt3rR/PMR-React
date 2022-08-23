import React from "react";
import style from "./button.module.scss";

export const Button = (props) => {

    const { type, onClick, text } = props;

    return <button className={`${style.button} ${style[type]}`} onClick={onClick}>{text}</button>
}