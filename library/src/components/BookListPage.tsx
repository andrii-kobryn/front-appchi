import React, {useEffect, useState} from "react";
import {Book} from "../model/Book";
import BookService from "../service/BookService";
import {Link, useNavigate} from "react-router-dom";

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
        <div>
            <h2>Список книг</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                </tr>
                </thead>
                <tbody>
                {books?.map((book) => (
                    <tr key={book.id}>
                        <td className="book-list-book-name" onClick={() => handleBookNameClick(book.id)}>{book.name}
                        </td>
                        <td>{book.author}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookListPage;