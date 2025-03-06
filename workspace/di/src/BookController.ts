import { inject, injectable } from "inversify";
import BookService from "./BookService";

@injectable()
export default class BookController {
    constructor(@inject("bookService") private bookService:BookService) {

    }

    print() {
        this.bookService.findAll().forEach(book => {
            console.log(book);
        })
    }
}