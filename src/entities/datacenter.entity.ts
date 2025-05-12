import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn, OneToMany,
} from 'typeorm';
import {Server} from "./server.entity";

@Entity("datacenters")
export class Datacenter extends BaseEntity {

    @PrimaryGeneratedColumn("identity")
    id: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    name: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    location: string;

    @OneToMany(() => Server, server => server.datacenter)
    servers: Server[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}