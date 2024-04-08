import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext/FormDataContext";
import FormPageLayout from "../FormPageLayout";
import { useForm } from "react-hook-form";
import FormRegisterContext from "../../../context/FormRegisterContext/FormRegisterContext";
import FormSubmitContext from "../../../context/FormSubmitContext/FormSubmitContext";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const { data, relatedData, isLoading, isError } = useFormData({ dataId: id });

  const { register, handleSubmit, formState } = useForm();

  const onSave = handleSubmit((data) => {
    /* отправка запроса */
  });

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ data, relatedData }}>
      <FormRegisterContext.Provider value={{ register, formState }}>
        <FormSubmitContext.Provider value={{ onSave }}>
          <FormPageLayout pageType="edit">{children}</FormPageLayout>
        </FormSubmitContext.Provider>
      </FormRegisterContext.Provider>
    </FormDataContext.Provider>
  );
};

export default EditPage;
