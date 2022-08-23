import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import style from "./layout.module.scss";

export const Layout = (props) => {
    return <>
        <Nav />
        <div className={style.layout}>
            {props.children}
        </div>
        <Footer />
    </>
}