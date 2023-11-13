import axios, {AxiosResponse} from "axios";
import {Book} from "../model/Book";

const API_URL = "http://localhost:4242/api/library"

const BookService = {
    getAllBooks: async (): Promise<Book[]> => {
        try {
            const response: AxiosResponse<Book[]> = await axios.get(`${API_URL}/books`);
            console.log(response);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getBookById: async (bookId: string | undefined): Promise<Book> => {
        try {
            const response: AxiosResponse<Book> = await axios.get(`${API_URL}/book/${bookId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

}

export default BookService;