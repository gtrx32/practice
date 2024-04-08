import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext/FormDataContext";
import FormPageLayout from "../FormPageLayout";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const { data, relatedData, isLoading, isError } = useFormData({ dataId: id });

  /* const form = useForm({ defaultValues: data }); */
  /* const onSave = () => form.handleSubmit((data) => ...);  */

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ data, relatedData }}>
      {/* <FormRegistryContext.Provider value={{ ??? }}>
        <FormSubmitContext.Provider value={{ onSave }}> */}
      <FormPageLayout pageType="edit">{children}</FormPageLayout>
      {/* </FormRegistryContext.Provider>
      </FormSubmitContext.Provider> */}
    </FormDataContext.Provider>
  );
};

export default EditPage;
