import {Button, Container, Grid, Typography} from "@mui/material";
import BookListItem from "../book-list-item/BookListItem";
import React from "react";
import BookListProps from "../../model/BookListProps";
import "./BookListContainer.css";
import {ControlPoint} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const BookListContainer: React.FC<BookListProps> = ({books, handleBookNameClick}) => {
    const navigate = useNavigate();

    const showAddBookPage = () => {
        navigate("/add-book");
    }

    return (
        <Container className="book-list-container" maxWidth="lg">
            <Grid className="book-list-head" container justifyContent="flex-start" alignItems="center">
                <Typography variant="h2">
                    Список книг
                </Typography>
                <Grid className="show-add-book-page-btn-wrapper">
                <Button className="show-add-book-page-btn" variant="contained" startIcon={<ControlPoint/>}
                        onClick={showAddBookPage}>Додати
                    книгу</Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {books?.map((book) => (
                    <BookListItem book={book} handleBookNameClick={handleBookNameClick}/>
                ))}
            </Grid>
        </Container>
    );
}

export default BookListContainer;