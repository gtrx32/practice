import { Route } from "react-router-dom";
import ResourceNameContext from "../../context/ResourceNameContext";
import { resourceListPages, resourceDetailsPages, resourceEditPages, resourceCreatePages } from "../types";

export const defineResource = (resourceName: string) => {
  const ResourceListPage = resourceListPages[resourceName];
  const ResourceDetailsPage = resourceDetailsPages[resourceName];
  const ResourceEditPage = resourceEditPages[resourceName];
  const ResourceCreatePage = resourceCreatePages[resourceName];

  return (
    <Route path={`/${resourceName}`}>
      <Route
        index
        element={
          <ResourceNameContext.Provider value={resourceName}>
            <ResourceListPage />
          </ResourceNameContext.Provider>
        }
      />
      <Route
        path=":id"
        element={
          <ResourceNameContext.Provider value={resourceName}>
            <ResourceDetailsPage />
          </ResourceNameContext.Provider>
        }
      />
      <Route
        path=":id/edit"
        element={
          <ResourceNameContext.Provider value={resourceName}>
            <ResourceEditPage />
          </ResourceNameContext.Provider>
        }
      />
      <Route
        path="create"
        element={
          <ResourceNameContext.Provider value={resourceName}>
            <ResourceCreatePage />
          </ResourceNameContext.Provider>
        }
      />
    </Route>
  );
};
