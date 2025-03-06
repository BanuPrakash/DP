import { inject, injectable } from "inversify";
import BookRepo from "./BookRepo";

@injectable()
export default class BookService {
    // @inject("bookRepo") private bookRepo: BookRepo

    constructor(@inject("bookRepo") private bookRepo: BookRepo) {
    }

    findAll() {
        return this.bookRepo.getBooks();
    }

}