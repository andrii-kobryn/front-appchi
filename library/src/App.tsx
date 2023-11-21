import React from 'react';
import './App.css';
import BookListPage from "./components/pages/book-list-page/BookListPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import BookPage from "./components/pages/book-page/BookPage";
import AddBookPage from "./components/pages/add-book-page/AddBookPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookListPage/>}/>
                <Route path="/:bookId" element={<BookPage/>}/>
                <Route path="/add-book" element={<AddBookPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
