import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { BookModel } from './bookModel.interface';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  GetAllBooks(){
    return this.bookService.GetAllBooks();
  }
  @Post()
  SaveBook(@Body() book:BookModel){
    return this.bookService.SaveBook(book)
  }
  @Put(':id')
  UpdateBook(@Param() id:any, @Body() book:BookModel){
    return this.bookService.UpdateBook(id.id, book);
  }
  @Delete(':id')
  DeleteBook(@Param() id){
    return this.bookService.DeleteBook(id.id);
  }

  @Get('reviewsByBookId/:id')
  GetReviewsById(@Param() id:any){
    return this.bookService.GetReviewsById(id.id)
  }
}
