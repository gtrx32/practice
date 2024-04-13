import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext";
import { FormProvider, useForm } from "react-hook-form";
import SaveFormContext from "../../../context/SaveFormContext";
import FormPageLayout from "../_components/FormPageLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import getResourceSchema from "../_components/forms/_shared/getResourceSchema";
import PageContext from "../../../context/PageContext";
import mainApi from "../../../api/api";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ErrorPage from "../../ErrorPage";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, relatedData, isLoading, isError } = useFormData();
  const { resourceName, dataId } = useContext(PageContext);
  const navigate = useNavigate();

  const form = useForm<DataType>({
    defaultValues: data || undefined,
    resolver: zodResolver(getResourceSchema(resourceName)),
  });

  const onSave = form.handleSubmit((data) => {
    mainApi
      .put(resourceName + "/" + dataId, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/" + resourceName + "/" + dataId);
      });
  });

  useEffect(() => {
    data && form.reset(data);
  }, [data]);

  if (isError) return <ErrorPage type="fail" />;

  if (isLoading) return <LoadingSpinner />;

  if (relatedData)
    return (
      <FormDataContext.Provider value={{ data, relatedData }}>
        <FormProvider {...form}>
          <SaveFormContext.Provider value={{ onSave }}>
            <FormPageLayout>{children}</FormPageLayout>
          </SaveFormContext.Provider>
        </FormProvider>
      </FormDataContext.Provider>
    );
};

export default EditPage;
