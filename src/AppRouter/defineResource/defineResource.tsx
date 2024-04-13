import { Route, useLocation } from "react-router-dom";
import { resourceListPages, resourceDetailsPages, resourceEditPages, resourceCreatePages } from "../pages";
import PageContext from "../../context/PageContext";

export const defineResource = (resourceName: Resources, relatedResourceName: RelatedResources) => {
  const ResourceListPage = resourceListPages[resourceName];
  const ResourceDetailsPage = resourceDetailsPages[resourceName];
  const ResourceEditPage = resourceEditPages[resourceName];
  const ResourceCreatePage = resourceCreatePages[resourceName];

  const dataId = Number(useLocation().pathname.match(/\/(\w+)\/(\d+)/)?.[2] ?? -1);

  return (
    <Route path={`/${resourceName}`}>
      <Route
        index
        element={
          <PageContext.Provider value={{ pageType: "list", resourceName, relatedResourceName, dataId }}>
            <ResourceListPage />
          </PageContext.Provider>
        }
      />
      <Route
        path=":id"
        element={
          <PageContext.Provider value={{ pageType: "details", resourceName, relatedResourceName, dataId }}>
            <ResourceDetailsPage />
          </PageContext.Provider>
        }
      />
      <Route
        path=":id/edit"
        element={
          <PageContext.Provider value={{ pageType: "edit", resourceName, relatedResourceName, dataId }}>
            <ResourceEditPage />
          </PageContext.Provider>
        }
      />
      <Route
        path="create"
        element={
          <PageContext.Provider value={{ pageType: "create", resourceName, relatedResourceName, dataId }}>
            <ResourceCreatePage />
          </PageContext.Provider>
        }
      />
    </Route>
  );
};
