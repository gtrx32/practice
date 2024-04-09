import { PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext/FormDataContext";
import { FormProvider, useForm } from "react-hook-form";
import FormSubmitContext from "../../../context/FormSubmitContext/FormSubmitContext";
import FormPageLayout from "../FormPageLayout";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const { data, relatedData, isLoading, isError } = useFormData({ dataId: id });

  const form = useForm<DataType>({ defaultValues: data || undefined });

  const onSave = form.handleSubmit((data) => {
    console.log(data);
    /* отправка запроса */
  });

  useEffect(() => {
    data && form.reset(data);
  }, [data]);

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ data, relatedData }}>
      <FormProvider {...form}>
        <FormSubmitContext.Provider value={{ onSave }}>
          <FormPageLayout pageType="edit">{children}</FormPageLayout>
        </FormSubmitContext.Provider>
      </FormProvider>
    </FormDataContext.Provider>
  );
};

export default EditPage;
