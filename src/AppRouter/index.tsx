import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import AlbumsCreatePage from "../pages/albums/AlbumsCreatePage";
import AlbumsEditPage from "../pages/albums/AlbumsEditPage";
import AlbumsPage from "../pages/albums/AlbumsPage";
import AlbumsViewPage from "../pages/albums/AlbumsViewPage";
import CommentsPage from "../pages/comments/CommentsPage";
import CommentsCreatePage from "../pages/comments/CommentsCreatePage";
import CommentsEditPage from "../pages/comments/CommentsEditPage";
import CommentsViewPage from "../pages/comments/CommentsViewPage";
import PhotosCreatePage from "../pages/photos/PhotosCreatePage";
import PhotosEditPage from "../pages/photos/PhotosEditPage";
import PhotosPage from "../pages/photos/PhotosPage";
import PhotosViewPage from "../pages/photos/PhotosViewPage";
import PostsCreatePage from "../pages/posts/PostsCreatePage";
import PostsEditPage from "../pages/posts/PostsEditPage";
import PostsPage from "../pages/posts/PostsPage";
import PostsViewPage from "../pages/posts/PostsViewPage";
import TodosCreatePage from "../pages/todos/TodosCreatePage";
import TodosEditPage from "../pages/todos/TodosEditPage";
import TodosPage from "../pages/todos/TodosPage";
import TodosViewPage from "../pages/todos/TodosViewPage";
import UsersCreatePage from "../pages/users/UsersCreatePage";
import UsersEditPage from "../pages/users/UsersEditPage";
import UsersPage from "../pages/users/UsersPage";
import UsersViewPage from "../pages/users/UsersViewPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/users" element={<UsersPage />}></Route>
    <Route path="/users/:id" element={<UsersViewPage />}></Route>
    <Route path="/users/create" element={<UsersCreatePage />}></Route>
    <Route path="/users/:id/edit" element={<UsersEditPage />}></Route>
    <Route path="/todos" element={<TodosPage />}></Route>
    <Route path="/todos/:id" element={<TodosViewPage />}></Route>
    <Route path="/todos/create" element={<TodosCreatePage />}></Route>
    <Route path="/todos/:id/edit" element={<TodosEditPage />}></Route>
    <Route path="/photos" element={<PhotosPage />}></Route>
    <Route path="/photos/:id" element={<PhotosViewPage />}></Route>
    <Route path="/photos/create" element={<PhotosCreatePage />}></Route>
    <Route path="/photos/:id/edit" element={<PhotosEditPage />}></Route>
    <Route path="/albums" element={<AlbumsPage />}></Route>
    <Route path="/albums/:id" element={<AlbumsViewPage />}></Route>
    <Route path="/albums/create" element={<AlbumsCreatePage />}></Route>
    <Route path="/albums/:id/edit" element={<AlbumsEditPage />}></Route>
    <Route path="/posts" element={<PostsPage />}></Route>
    <Route path="/posts/:id" element={<PostsViewPage />}></Route>
    <Route path="/posts/create" element={<PostsCreatePage />}></Route>
    <Route path="/posts/:id/edit" element={<PostsEditPage />}></Route>
    <Route path="/comments" element={<CommentsPage />}></Route>
    <Route path="/comments/:id" element={<CommentsViewPage />}></Route>
    <Route path="/comments/create" element={<CommentsCreatePage />}></Route>
    <Route path="/comments/:id/edit" element={<CommentsEditPage />}></Route>
  </Routes>
);

export default AppRouter;
