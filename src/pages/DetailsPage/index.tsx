import { useContext } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDetailsData from "../../hooks/useDetailsData";
import DetailsPageLayout from "./DetailsPageLayout";
import ResourceNameContext from "../../context/ResourceNameContext";

const DetailsPage = () => {
  const { data, resourceId, relatedData, relatedPath, isLoading, isError } = useDetailsData();
  const resourceName = useContext(ResourceNameContext);

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    data &&
    (resourceName === "users" || relatedData) && (
      <DetailsPageLayout data={data} resourceId={resourceId} relatedData={relatedData} relatedPath={relatedPath} />
    )
  );
};

export default DetailsPage;
