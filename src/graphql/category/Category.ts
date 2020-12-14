import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Category {
  @Field()
  name: String;
  @Field()
  description: String;
  @Field()
  _id: String;
}

export default Category;
