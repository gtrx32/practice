import { Routes, Route } from "react-router-dom"
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import AlbumsCreatePage from "../pages/albums/AlbumsCreatePage";
import AlbumsEditPage from "../pages/albums/AlbumsEditPage";
import AlbumsPage from "../pages/albums/AlbumsPage";
import AlbumsViewPage from "../pages/albums/AlbumsViewPage";

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<MainPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/albums' element={<AlbumsPage />}></Route>
    <Route path='/albums/:id' element={<AlbumsViewPage />}></Route>
    <Route path='/albums/create' element={<AlbumsCreatePage />}></Route>
    <Route path='/albums/:id/edit' element={<AlbumsEditPage />}></Route>
  </Routes>
);

export default AppRouter;