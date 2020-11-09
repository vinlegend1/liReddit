import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

// stopped at 17:55
@ObjectType()
@Entity()
export class User {

  @Field(() => Int) // @Field for a graphql field for Post
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() }) // special hook that creates new date
  updatedAt = new Date();

  @Field() // if you delete this, you hide the field but still in database
  @Property({ type: 'text', unique: true }) // if I remove @Property(), it's not a database column, it's just a field of the class
  username!: string;

  @Field() // if you delete this, you hide the field but still in database
  @Property({ type: 'text', unique: true }) // if I remove @Property(), it's not a database column, it's just a field of the class
  email!: string;

  @Property({ type: 'text' }) // if I remove @Property(), it's not a database column, it's just a field of the class
  password!: string;
}