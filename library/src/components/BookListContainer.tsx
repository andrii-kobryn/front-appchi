import {Container, Grid, Typography} from "@mui/material";
import BookListItem from "./BookListItem";
import React from "react";
import {Book} from "../model/Book";

const BookListContainer = (books: Book[] | undefined, handleBookNameClick: (bookId: number) => void) => {
    return(
        <Container className="book-list-container" maxWidth="lg">
            <Typography className="book-list-head" variant="h2">
                Список книг
            </Typography>
            <Grid container spacing={2}>
                {books?.map((book) => (
                    BookListItem(book, handleBookNameClick)
                ))}
            </Grid>
        </Container>
    );
}

export default BookListContainer;