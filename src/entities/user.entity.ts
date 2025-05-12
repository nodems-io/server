import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn("identity")
    id: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    name: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}