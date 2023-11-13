import React, {useEffect, useState} from "react";
import {Book} from "../model/Book";
import BookService from "../service/BookService";
import {useParams} from "react-router-dom";

const BookPage: React.FC = () => {
    const {bookId} = useParams();
    const [book, setBook] = useState<Book>();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookData = await BookService.getBookById(bookId);
                setBook(bookData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchBook();
    }, [bookId]);

    return (
        <div className="book-container">
            <h2>{book?.name}</h2>
            <div className="book-details">
                <p>Автор: {book?.author}</p>
                <p>Опис: {book?.description}</p>
                <p>Жанр: {book?.genreNames}</p>
                <p>Оцінка: {book?.rating}</p>
            </div>
        </div>
    );
}

export default BookPage;