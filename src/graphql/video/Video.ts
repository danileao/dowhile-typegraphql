import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Video {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  _id: string;
}

export default Video;
