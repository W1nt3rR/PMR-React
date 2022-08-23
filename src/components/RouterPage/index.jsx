import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Magisk } from "../Magisk";

export const RouterPage = (props) => {
    return (
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/magisk" element={<Magisk />} />
            <Route path="*" element={<p>404</p>} />
       </Routes>
    );
}