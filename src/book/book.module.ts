import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
// import { Book } from './bookRepository.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
