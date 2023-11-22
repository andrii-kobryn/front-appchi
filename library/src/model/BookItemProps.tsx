import {Book} from "./Book";

interface BookListProps {
    book: Book;
    handleBookNameClick: (bookId: number) => void;
}

export default BookListProps;