import { PropsWithChildren } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext/FormDataContext";
import FormPageLayout from "../FormPageLayout";

const CreatePage: React.FC<PropsWithChildren> = ({ children }) => {
  const { relatedData, isLoading, isError } = useFormData({});

  /* const form = useForm({ defaultValues: ??? }); */
  /* const onSave = () => form.handleSubmit((data) => ...);  */

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ relatedData }}>
      {/* <FormRegistryContext.Provider value={{ ??? }}>
        <FormSubmitContext.Provider value={{ onSave }}> */}
      <FormPageLayout pageType="create">{children}</FormPageLayout>
      {/* </FormRegistryContext.Provider>
      </FormSubmitContext.Provider> */}
    </FormDataContext.Provider>
  );
};

export default CreatePage;
