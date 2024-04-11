import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import { defineResource } from "./defineResource/defineResource";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="*" element={<div>page not found</div>} />
    {defineResource("users")}
    {defineResource("todos")}
    {defineResource("photos")}
    {defineResource("albums")}
    {defineResource("posts")}
    {defineResource("comments")}
  </Routes>
);

export default AppRouter;
