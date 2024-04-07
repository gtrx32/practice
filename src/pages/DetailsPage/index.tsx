import { PropsWithChildren } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDetailsData from "../../hooks/useDetailsData";
import DetailsPageLayout from "./DetailsPageLayout";

const DetailsPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, resourceId, relatedData, relatedPath, isLoading, isError } = useDetailsData();

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    data &&
    relatedData && (
      <DetailsPageLayout
        children={children}
        data={data}
        resourceId={resourceId}
        relatedData={relatedData}
        relatedPath={relatedPath}
      />
    )
  );
};

export default DetailsPage;
