import AlbumsCreatePage from "../pages/FormPages/CreatePage/resources/AlbumsCreatePage";
import CommentsCreatePage from "../pages/FormPages/CreatePage/resources/CommentsCreatePage";
import PhotosCreatePage from "../pages/FormPages/CreatePage/resources/PhotosCreatePage";
import PostsCreatePage from "../pages/FormPages/CreatePage/resources/PostsCreatePage";
import TodosCreatePage from "../pages/FormPages/CreatePage/resources/TodosCreatePage";
import UsersCreatePage from "../pages/FormPages/CreatePage/resources/UsersCreatePage";
import AlbumsEditPage from "../pages/FormPages/EditPage/resources/AlbumsEditPage";
import CommentsEditPage from "../pages/FormPages/EditPage/resources/CommentsEditPage";
import PhotosEditPage from "../pages/FormPages/EditPage/resources/PhotosEditPage";
import PostsEditPage from "../pages/FormPages/EditPage/resources/PostsEditPage";
import TodosEditPage from "../pages/FormPages/EditPage/resources/TodosEditPage";
import UsersEditPage from "../pages/FormPages/EditPage/resources/UsersEditPage";
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

export const resourceEditPages: Record<string, React.FC> = {
  users: UsersEditPage,
  todos: TodosEditPage,
  photos: PhotosEditPage,
  albums: AlbumsEditPage,
  posts: PostsEditPage,
  comments: CommentsEditPage,
};

export const resourceCreatePages: Record<string, React.FC> = {
  users: UsersCreatePage,
  todos: TodosCreatePage,
  photos: PhotosCreatePage,
  albums: AlbumsCreatePage,
  posts: PostsCreatePage,
  comments: CommentsCreatePage,
};
