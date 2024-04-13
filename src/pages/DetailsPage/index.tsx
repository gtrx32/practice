import React, { PropsWithChildren, useContext } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDetailsData from "../../hooks/useDetailsData";
import DetailsPageLayout from "./_components/DetailsPageLayout";
import PageContext from "../../context/PageContext";
import ErrorPage from "../ErrorPage";

const DetailsPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { resourceName } = useContext(PageContext);
  const { data, relatedData, relatedPath, isLoading, isError } = useDetailsData();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorPage type="fail" />;

  return (
    data &&
    (resourceName === "users" || relatedData) && (
      <DetailsPageLayout data={data} relatedData={relatedData} relatedPath={relatedPath}>
        {children}
      </DetailsPageLayout>
    )
  );
};

export default DetailsPage;
