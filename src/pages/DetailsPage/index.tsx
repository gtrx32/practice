import React, { PropsWithChildren } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDetailsData from "../../hooks/useDetailsData";
import DetailsPageLayout from "./_components/DetailsPageLayout";
import ErrorPage from "../ErrorPage";

const DetailsPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, relatedData, relatedPath, isLoading, isError } = useDetailsData();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorPage type="fail" />;

  return (
    <DetailsPageLayout data={data as DataType} relatedData={relatedData as RelatedDataType} relatedPath={relatedPath}>
      {children}
    </DetailsPageLayout>
  );
};

export default DetailsPage;
