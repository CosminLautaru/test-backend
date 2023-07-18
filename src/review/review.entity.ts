import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToMany, ManyToOne } from "typeorm"
import { BookEntity } from "../book/book.entity"

@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => BookEntity, (book) => book.reviews, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'book_id' })
    book_id: number


    @Column()
    review_text: string

    @Column()
    reviewer_name: string

    @Column()
    review_date: string
}