import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ListPage from "../pages/ListPage";
import DetailsPage from "../pages/DetailsPage";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/users" element={<ListPage table="users" />}></Route>
    <Route path="/users/:id" element={<DetailsPage />}></Route>
    <Route path="/users/:id/edit" element={<EditPage />}></Route>
    <Route path="/users/create" element={<CreatePage />}></Route>
    <Route path="/todos" element={<ListPage table="todos" />}></Route>
    <Route path="/todos/:id" element={<DetailsPage />}></Route>
    <Route path="/todos/:id/edit" element={<EditPage />}></Route>
    <Route path="/todos/create" element={<CreatePage />}></Route>
    <Route path="/photos" element={<ListPage table="photos" />}></Route>
    <Route path="/photos/:id" element={<DetailsPage />}></Route>
    <Route path="/photos/:id/edit" element={<EditPage />}></Route>
    <Route path="/photos/create" element={<CreatePage />}></Route>
    <Route path="/albums" element={<ListPage table="albums" />}></Route>
    <Route path="/albums/:id" element={<DetailsPage />}></Route>
    <Route path="/albums/:id/edit" element={<EditPage />}></Route>
    <Route path="/albums/create" element={<CreatePage />}></Route>
    <Route path="/posts" element={<ListPage table="posts" />}></Route>
    <Route path="/posts/:id" element={<DetailsPage />}></Route>
    <Route path="/posts/:id/edit" element={<EditPage />}></Route>
    <Route path="/posts/create" element={<CreatePage />}></Route>
    <Route path="/comments" element={<ListPage table="comments" />}></Route>
    <Route path="/comments/:id" element={<DetailsPage />}></Route>
    <Route path="/comments/:id/edit" element={<EditPage />}></Route>
    <Route path="/comments/create" element={<CreatePage />}></Route>
  </Routes>
);

export default AppRouter;
