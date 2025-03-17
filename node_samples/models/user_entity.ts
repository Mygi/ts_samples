import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ name:"first_name", type:"text" })
    firstName: string= "";

    @Column({ name: "last_name", type: "text" })
    lastName: string= "";

    @Column({ name:"password", type:"text" })
    password: string= "";

    @Column({ name:"user_name", type:"text" })
    username: string = "";

}