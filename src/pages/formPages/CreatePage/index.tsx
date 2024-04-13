import { PropsWithChildren, useContext } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext";
import { FormProvider, useForm } from "react-hook-form";
import SaveFormContext from "../../../context/SaveFormContext";
import FormPageLayout from "../_components/FormPageLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import getResourceSchema from "../_components/forms/_shared/getResourceSchema";
import PageContext from "../../../context/PageContext";
import { useNavigate } from "react-router-dom";
import mainApi from "../../../api/api";
import ErrorPage from "../../ErrorPage";

const CreatePage: React.FC<PropsWithChildren> = ({ children }) => {
  const { relatedData, isLoading, isError } = useFormData();
  const { resourceName } = useContext(PageContext);
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

  if (isError) return <ErrorPage type="fail" />;

  if (isLoading) return <LoadingSpinner />;

  if (relatedData)
    return (
      <FormDataContext.Provider value={{ relatedData }}>
        <FormProvider {...form}>
          <SaveFormContext.Provider value={{ onSave }}>
            <FormPageLayout>{children}</FormPageLayout>
          </SaveFormContext.Provider>
        </FormProvider>
      </FormDataContext.Provider>
    );
};

export default CreatePage;
