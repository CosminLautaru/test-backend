import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewModel } from './review.interface';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  GetAllReviews(bookId){
    return this.reviewService.GetAllReviews(bookId).then(res=>console.log(res))
  }

  @Post()
  SaveReview(@Body() review:ReviewModel){
    console.log(review)
    return this.reviewService.SaveReview(review);
  }

  @Put(':id')
  UpdateReview(@Param() id, @Body() review: ReviewModel){
    console.log(review)
    return this.reviewService.UpdateReview(id.id, review)
  }

  @Delete(':id')
  DeleteReview(@Param() id){
    return this.reviewService.DeleteReview(id.id)
  }
}
