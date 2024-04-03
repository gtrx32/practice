import AlbumsListPage from "../pages/ListPage/resources/AlbumsListPage";
import CommentsListPage from "../pages/ListPage/resources/CommentsListPage";
import PhotosListPage from "../pages/ListPage/resources/PhotosListPage";
import PostsListPage from "../pages/ListPage/resources/PostsListPage";
import TodosListPage from "../pages/ListPage/resources/TodosListPage";
import UsersListPage from "../pages/ListPage/resources/UsersListPage";

export const resourceListPages: Record<string, React.FC> = {
  users: UsersListPage,
  todos: TodosListPage,
  photos: PhotosListPage,
  albums: AlbumsListPage,
  posts: PostsListPage,
  comments: CommentsListPage,
};
