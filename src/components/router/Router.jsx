import React from 'react';
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Home from "../../views/home/Home";
import Projects from "../../views/projects/Projects";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;