import { PropsWithChildren, useContext } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext";
import { FormProvider, useForm } from "react-hook-form";
import SaveFormContext from "../../../context/SaveFormContext";
import FormPageLayout from "../_components/FormPageLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import getResourceSchema from "../_components/forms/_shared/getResourceSchema";
import ResourceNameContext from "../../../context/ResourceNameContext";
import { useNavigate } from "react-router-dom";
import mainApi from "../../../api/api";

const CreatePage: React.FC<PropsWithChildren> = ({ children }) => {
  const { relatedData, isLoading, isError } = useFormData({});
  const resourceName = useContext(ResourceNameContext);
  const navigate = useNavigate();

  const form = useForm<DataType>({ resolver: zodResolver(getResourceSchema(resourceName)) });

  const onSave = form.handleSubmit((data) => {
    mainApi
      .post(resourceName, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/" + resourceName);
      });
  });

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ relatedData }}>
      <FormProvider {...form}>
        <SaveFormContext.Provider value={{ onSave }}>
          <FormPageLayout pageType="create">{children}</FormPageLayout>
        </SaveFormContext.Provider>
      </FormProvider>
    </FormDataContext.Provider>
  );
};

export default CreatePage;
