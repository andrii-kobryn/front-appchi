import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import {Book} from "../model/Book";

const BookWithDetailsItem = (book?: Book) => {
    return (
        <Container className="book-item">
            <Typography variant="h4">{book?.name}</Typography>
            <Box className="book-details-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1">Автор: {book?.author}</Typography>
                        <Typography variant="body1">Опис: {book?.description}</Typography>
                        <Typography variant="body1">Жанр: {book?.genreNames.join(", ")}</Typography>
                        <Typography variant="body1">Рейтинг: {book?.rating}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default BookWithDetailsItem;