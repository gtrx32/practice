import { Routes, Route } from "react-router-dom";
import { defineResource } from "./defineResource/defineResource";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<ErrorPage type="notFound" />} />
    {defineResource("users", "none")}
    {defineResource("todos", "users")}
    {defineResource("photos", "albums")}
    {defineResource("albums", "users")}
    {defineResource("posts", "users")}
    {defineResource("comments", "posts")}
  </Routes>
);

export default AppRouter;
