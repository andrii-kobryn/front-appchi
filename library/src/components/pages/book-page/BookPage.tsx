import React, {useEffect, useState} from "react";
import {Book} from "../../../model/Book";
import BookService from "../../../service/BookService";
import {useParams} from "react-router-dom";
import BookWithDetailsItem from "../../book-with-details-item/BookWithDetailsItem";

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
        <BookWithDetailsItem book={book}/>
    );
};

export default BookPage;