import  { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("bans")

export class Bans {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 22})
    guild!: string;

    @Column({ type: "varchar", length: 22 })
    user!: string;

    @Column({ type: "varchar", length: 22 })
    moderator!: string;


    @Column({ type: "varchar", length: 22 })
    reason!: string;

    @Column({ type: "varchar", length: 22 })
    duration!: string;
}