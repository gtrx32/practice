import { PropsWithChildren } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFormData from "../../hooks/useFormData";
import ErrorPage from "../ErrorPage";
import CreatePageLayout from "./CreatePageLayout";

const CreatePage: React.FC<PropsWithChildren> = ({ children }) => {
  const { relatedData, isLoading, isError } = useFormData();

  if (isError) return <ErrorPage type="fail" />;

  if (isLoading) return <LoadingSpinner />;

  return <CreatePageLayout relatedData={relatedData as RelatedDataType[]}>{children}</CreatePageLayout>;
};

export default CreatePage;
