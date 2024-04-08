import { PropsWithChildren } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext/FormDataContext";
import FormPageLayout from "../FormPageLayout";
import { useForm } from "react-hook-form";
import FormRegisterContext from "../../../context/FormRegisterContext/FormRegisterContext";
import FormSubmitContext from "../../../context/FormSubmitContext/FormSubmitContext";

const CreatePage: React.FC<PropsWithChildren> = ({ children }) => {
  const { relatedData, isLoading, isError } = useFormData({});

  const { register, handleSubmit, formState } = useForm();

  const onSave = handleSubmit((data) => {
    /* отправка запроса */
  });

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ relatedData }}>
      <FormRegisterContext.Provider value={{ register, formState }}>
        <FormSubmitContext.Provider value={{ onSave }}>
          <FormPageLayout pageType="create">{children}</FormPageLayout>
        </FormSubmitContext.Provider>
      </FormRegisterContext.Provider>
    </FormDataContext.Provider>
  );
};

export default CreatePage;
