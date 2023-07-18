import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './review.entity';
import { Repository } from 'typeorm';
import { ReviewModel } from './review.interface';

@Injectable()
export class ReviewService {

    constructor(
        @InjectRepository(ReviewEntity)
        private reviewRepository: Repository<ReviewEntity>,
      ) {}

    GetAllReviews(bookId){
        return this.reviewRepository.find({
            where: { book_id: bookId },
            relations: ['book_id', 'book_id.reviews'],
          })
    }

    SaveReview(review:ReviewModel){
        review.review_date = Date.now().toString()
        return this.reviewRepository.save(review);
    }

    UpdateReview(id, review:ReviewModel){
        console.log(review)
        return this.reviewRepository.update({id: id}, review)
    }

    DeleteReview(id){
        return this.reviewRepository.delete({id:id})
    }
}
