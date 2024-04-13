import { ZodType, z } from "zod";
import { albumsSchema } from "../AlbumsForm";
import { commentsSchema } from "../CommentsForm";
import { photosSchema } from "../PhotosForm";
import { postsSchema } from "../PostsForm";
import { todosSchema } from "../TodosForm";
import { usersSchema } from "../UsersForm";

const emptySchema = z.object({});

const getResourceSchema = (resourceName: Resources): ZodType<any, any, any> => {
  switch (resourceName) {
    case "users":
      return usersSchema;
    case "todos":
      return todosSchema;
    case "photos":
      return photosSchema;
    case "albums":
      return albumsSchema;
    case "posts":
      return postsSchema;
    case "comments":
      return commentsSchema;
    default:
      return emptySchema;
  }
};

export default getResourceSchema;
