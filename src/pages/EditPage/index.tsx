import { PropsWithChildren } from "react";
import EditPageLayout from "./EditPageLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFormData from "../../hooks/useFormData";
import ErrorPage from "../ErrorPage";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, relatedData, isLoading, isError } = useFormData();

  if (isError) return <ErrorPage type="fail" />;

  if (isLoading) return <LoadingSpinner />;

  return (
    <EditPageLayout data={data as DataType} relatedData={relatedData as RelatedDataType[]}>
      {children}
    </EditPageLayout>
  );
};

export default EditPage;
