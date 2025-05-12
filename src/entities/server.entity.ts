import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn, ManyToOne,
} from 'typeorm';
import {Datacenter} from "./datacenter.entity";

@Entity("servers")
export class Server extends BaseEntity {

    @PrimaryGeneratedColumn("identity")
    id: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    name: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    ipAddress: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    os: string;

    @Column({ type: "int", nullable: true })
    cpu: number;

    @Column({ type: "int", nullable: true })
    memory: number;

    @Column({ type: "int", nullable: true })
    disk: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    status: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    hostname: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    username: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    password: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    sshKey: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    sshPort: string;

    @ManyToOne(() => Datacenter, datacenter => datacenter.servers, { eager: true })
    datacenter: Datacenter;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}