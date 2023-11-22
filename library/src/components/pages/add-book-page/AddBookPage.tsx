import React, {useState} from "react";
import {
    Box,
    Button, Checkbox,
    Container,
    FormControl,
    Grid,
    InputLabel, ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import "./AddBookPage.css";

const genres = [
    "Fiction",
    "Classic",
    "Coming-of-age"
];
const AddBookPage: React.FC<any> = () => {
    const [genreName, setGenreName] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const handleSelectChange = (event: SelectChangeEvent<typeof genreName>) => {
        const {target: {value},} = event;
        setGenreName(
            typeof value === "string" ? value.split(",") : value,
        );
    };

    const handleSaveBook = () => {
        if (!title || !author || !description) {
            alert("Будь ласка, заповніть всі поля!");
            return;
        }
    }

    return (
        <Box className="add-book-box" display="flex" justifyContent="center">
            <FormControl>
                <Typography className="head" variant="h2">
                    Додати книгу
                </Typography>
                <hr/>
                <FormControl>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className="text-field"
                                label="Назва"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField className="text-field"
                                       label="Автор"
                                       value={author}
                                       onChange={(e) => setAuthor(e.target.value)}>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className="text-field"
                            fullWidth label="Опис"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline maxRows={8}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel className="select-input" id="genre">Жанр</InputLabel>
                            <Select
                                className="select-field"
                                labelId="genre"
                                label="Жанр"
                                multiple
                                value={genreName}
                                renderValue={(selected) => selected.join(', ')}
                                onChange={handleSelectChange}
                                displayEmpty
                                defaultValue={[]}>
                                {genres.map((genre) => (
                                    <MenuItem key={genre} value={genre}>
                                        <Checkbox checked={genreName.indexOf(genre) > -1}/>
                                        <ListItemText primary={genre}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} container justifyContent="flex-end">
                        <Button className="add-book-btn" variant="contained" onClick={handleSaveBook}>
                            Зберегти
                        </Button>
                    </Grid>
                </FormControl>
            </FormControl>
        </Box>
    );
}

export default AddBookPage;