import { Container } from "inversify";
import BookService from "./BookService";
import BookRepoImpl from "./BookRepoImpl";
import BookController from "./BookController";

let container = new Container();

container.bind("bookService").to(BookService).inSingletonScope();
container.bind("bookRepo").to(BookRepoImpl).inSingletonScope();
container.bind("bookController").to(BookController).inTransientScope();

container.get<BookController>("bookController").print();