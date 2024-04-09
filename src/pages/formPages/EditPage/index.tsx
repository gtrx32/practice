import { PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext/FormDataContext";
import { useForm } from "react-hook-form";
import FormRegisterContext from "../../../context/FormRegisterContext/FormRegisterContext";
import FormSubmitContext from "../../../context/FormSubmitContext/FormSubmitContext";
import FormPageLayout from "../FormPageLayout";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const { data, relatedData, isLoading, isError } = useFormData({ dataId: id });

  const { register, handleSubmit, formState, reset } = useForm<DataType>({ defaultValues: data || undefined });

  const onSave = handleSubmit((data) => {
    console.log(data);
    /* отправка запроса */
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

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
