import { BookEntity } from "src/book/book.entity";
import { IntegerType } from "typeorm";

export interface ReviewModel{
    id:number,
    bookId:number,
    review_text:string,
    reviewer_name:string,
    review_date:string,
}