import { ReviewEntity } from "src/review/review.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    publication_date: string

    @Column()
    summary: string

    @OneToMany(() => ReviewEntity, (review) => review.book_id)
    reviews: ReviewEntity[]
}