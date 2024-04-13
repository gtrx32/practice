import { createContext } from "react";

interface PageContextType {
  pageType: Pages;
  resourceName: Resources;
  relatedResourceName: RelatedResources;
  dataId: number;
}

const defaultState: PageContextType = {
  pageType: "main",
  resourceName: "users",
  relatedResourceName: "none",
  dataId: -1,
};

const PageContext = createContext<PageContextType>(defaultState);

export default PageContext;
