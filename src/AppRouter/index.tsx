import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import { defineResource } from "./defineResource/defineResource";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<ErrorPage type="notFound" />} />
    {defineResource("users")}
    {defineResource("todos")}
    {defineResource("photos")}
    {defineResource("albums")}
    {defineResource("posts")}
    {defineResource("comments")}
  </Routes>
);

export default AppRouter;
