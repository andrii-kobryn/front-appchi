import {Grid, Typography} from "@mui/material";
import React from "react";
import BookItemProps from "../../model/BookItemProps";
import "./BookListItem.css";

const BookListItem: React.FC<BookItemProps> = ({book, handleBookNameClick}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <div className="book-list-item" onClick={() => handleBookNameClick(book.id)}>
                <Typography variant="body1">
                    Назва: {book.name}
                </Typography>
                <Typography variant="body1" className="author-name">
                    Автор: {book.author}
                </Typography>
                <Typography variant="body1">
                    Рейтинг: {book.rating}
                </Typography>
            </div>
        </Grid>
    );
}

export default BookListItem