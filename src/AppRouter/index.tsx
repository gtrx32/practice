import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ListPage from "../pages/ListPage";
import DetailsPage from "../pages/DetailsPage";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import { createContext } from "react";

const ResourceNameContext = createContext<string>("");

const defineResource = (resourceName: string) => (
  <Route path={`/${resourceName}`}>
    <Route
      index
      element={
        <ResourceNameContext.Provider value={resourceName}>
          <ListPage />
        </ResourceNameContext.Provider>
      }
    />
    <Route
      path=":id"
      element={
        <ResourceNameContext.Provider value={resourceName}>
          <DetailsPage />
        </ResourceNameContext.Provider>
      }
    />
    <Route
      path=":id/edit"
      element={
        <ResourceNameContext.Provider value={resourceName}>
          <EditPage />
        </ResourceNameContext.Provider>
      }
    />
    <Route
      path="create"
      element={
        <ResourceNameContext.Provider value={resourceName}>
          <CreatePage />
        </ResourceNameContext.Provider>
      }
    />
  </Route>
);
export { defineResource, ResourceNameContext };

const AppRouter = () => (
  <>
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="*" element={<div>not found</div>} />
      {defineResource("users")}
      {defineResource("todos")}
      {defineResource("photos")}
      {defineResource("albums")}
      {defineResource("posts")}
      {defineResource("comments")}
    </Routes>
  </>
);

export default AppRouter;
