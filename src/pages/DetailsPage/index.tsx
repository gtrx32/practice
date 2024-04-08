import { useContext } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useDetailsData from "../../hooks/useDetailsData";
import DetailsPageLayout from "./DetailsPageLayout";
import ResourceNameContext from "../../context/ResourceNameContext";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const resourceName = useContext(ResourceNameContext);
  const { id } = useParams();
  const { data, relatedData, relatedPath, isLoading, isError } = useDetailsData({ dataId: id });

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    data &&
    (resourceName === "users" || relatedData) && (
      <DetailsPageLayout data={data} relatedData={relatedData} relatedPath={relatedPath} />
    )
  );
};

export default DetailsPage;
