import React, {useEffect, useState} from "react";
import {Book} from "../model/Book";
import BookService from "../service/BookService";
import {useNavigate} from "react-router-dom";
import BookListContainer from "./BookListContainer";

const BookListPage: React.FC = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState<Book[]>();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await BookService.getAllBooks();
                setBooks(booksData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBooks();

    }, []);

    const handleBookNameClick = (bookId: number) => {
        navigate(`/${bookId}`);
    }

    return (
        BookListContainer(books, handleBookNameClick)
    );
};

export default BookListPage;