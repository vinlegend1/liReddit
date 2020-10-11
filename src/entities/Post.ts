import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

// stopped at 17:55
@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() }) // special hook that creates new date
  updatedAt = new Date();

  @Property({ type: 'text' }) // if I remove @Property(), it's not a database column, it's just a field of the class
  title!: string;

}