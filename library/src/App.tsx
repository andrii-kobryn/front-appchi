import React from 'react';
import './App.css';
import BookListPage from "./components/BookListPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import BookPage from "./components/BookPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookListPage/>}></Route>
                <Route path="/:bookId" element={<BookPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
