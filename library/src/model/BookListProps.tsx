import {Book} from "./Book";

interface BookListProps {
    books: Book[] | undefined;
    handleBookNameClick: (bookId: number) => void;
}

export default BookListProps;
