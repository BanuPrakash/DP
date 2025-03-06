import { injectable } from "inversify";
import BookRepo from "./BookRepo";

@injectable()
export default class BookRepoImpl implements BookRepo {
    getBooks(): any[] {
        return [
            {"id": 1, "title" :"React in Action"},
            {"id": 2, "title": "JS Patterns"}
        ]
    }
}