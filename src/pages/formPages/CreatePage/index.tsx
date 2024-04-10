import { PropsWithChildren, useContext } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext/FormDataContext";
import { FormProvider, useForm } from "react-hook-form";
import FormSubmitContext from "../../../context/FormSubmitContext/FormSubmitContext";
import FormPageLayout from "../FormPageLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import getResourceSchema from "../FormPageLayout/forms/_shared/getSchema";
import ResourceNameContext from "../../../context/ResourceNameContext";

const CreatePage: React.FC<PropsWithChildren> = ({ children }) => {
  const { relatedData, isLoading, isError } = useFormData({});
  const resourceName = useContext(ResourceNameContext);

  const form = useForm<DataType>({ resolver: zodResolver(getResourceSchema(resourceName)) });

  const onSave = form.handleSubmit((data) => {
    console.log(data);
    /* отправка запроса */
  });

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ relatedData }}>
      <FormProvider {...form}>
        <FormSubmitContext.Provider value={{ onSave }}>
          <FormPageLayout pageType="create">{children}</FormPageLayout>
        </FormSubmitContext.Provider>
      </FormProvider>
    </FormDataContext.Provider>
  );
};

export default CreatePage;
