import { Injectable } from '@nestjs/common';
import { BookEntity } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookModel } from './bookModel.interface';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>,
      ) {}

      GetAllBooks(){
        return this.bookRepository.find();
      }
      SaveBook(book: BookModel){
        book.publication_date = Date.now().toString();
        return this.bookRepository.save(book)
      }
      UpdateBook(id:number, book:BookModel){
        return this.bookRepository.update({id: id}, book)
      }
      DeleteBook(id:number){
        return this.bookRepository.delete({id: id});
      }
      GetReviewsById(id:any){
        return this.bookRepository.findOne({
          where:{
          id:id
        },
        relations: ['reviews', 'reviews.book_id'],
      });
      }

}
