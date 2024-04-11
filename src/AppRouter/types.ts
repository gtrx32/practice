import AlbumsListPage from "../pages/ListPage/resources/AlbumsListPage";
import CommentsListPage from "../pages/ListPage/resources/CommentsListPage";
import PhotosListPage from "../pages/ListPage/resources/PhotosListPage";
import PostsListPage from "../pages/ListPage/resources/PostsListPage";
import TodosListPage from "../pages/ListPage/resources/TodosListPage";
import UsersListPage from "../pages/ListPage/resources/UsersListPage";
import AlbumsDetailsPage from "../pages/DetailsPage/resources/AlbumsDetailsPage";
import CommentsDetailsPage from "../pages/DetailsPage/resources/CommentsDetailsPage";
import PhotosDetailsPage from "../pages/DetailsPage/resources/PhotosDetailsPage";
import PostsDetailsPage from "../pages/DetailsPage/resources/PostsDetailsPage";
import TodosDetailsPage from "../pages/DetailsPage/resources/TodosDetailsPage";
import UsersDetailsPage from "../pages/DetailsPage/resources/UsersDetailsPage";
import AlbumsEditPage from "../pages/formPages/EditPage/resources/AlbumsEditPage";
import CommentsEditPage from "../pages/formPages/EditPage/resources/CommentsEditPage";
import PhotosEditPage from "../pages/formPages/EditPage/resources/PhotosEditPage";
import PostsEditPage from "../pages/formPages/EditPage/resources/PostsEditPage";
import TodosEditPage from "../pages/formPages/EditPage/resources/TodosEditPage";
import UsersEditPage from "../pages/formPages/EditPage/resources/UsersEditPage";
import AlbumsCreatePage from "../pages/formPages/CreatePage/resources/AlbumsCreatePage";
import CommentsCreatePage from "../pages/formPages/CreatePage/resources/CommentsCreatePage";
import PhotosCreatePage from "../pages/formPages/CreatePage/resources/PhotosCreatePage";
import PostsCreatePage from "../pages/formPages/CreatePage/resources/PostsCreatePage";
import TodosCreatePage from "../pages/formPages/CreatePage/resources/TodosCreatePage";
import UsersCreatePage from "../pages/formPages/CreatePage/resources/UsersCreatePage";

export const resourceListPages: Record<string, React.FC> = {
  users: UsersListPage,
  todos: TodosListPage,
  photos: PhotosListPage,
  albums: AlbumsListPage,
  posts: PostsListPage,
  comments: CommentsListPage,
};

export const resourceDetailsPages: Record<string, React.FC> = {
  users: UsersDetailsPage,
  todos: TodosDetailsPage,
  photos: PhotosDetailsPage,
  albums: AlbumsDetailsPage,
  posts: PostsDetailsPage,
  comments: CommentsDetailsPage,
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
