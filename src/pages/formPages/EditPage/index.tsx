import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFormData from "../../../hooks/useFormData";
import FormDataContext from "../../../context/FormDataContext";
import { FormProvider, useForm } from "react-hook-form";
import SaveFormContext from "../../../context/SaveFormContext";
import FormPageLayout from "../_components/FormPageLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import getResourceSchema from "../_components/forms/_shared/getResourceSchema";
import ResourceNameContext from "../../../context/ResourceNameContext";
import mainApi from "../../../api/api";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ErrorPage from "../../ErrorPage";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const { data, relatedData, isLoading, isError } = useFormData({ resourceId: id });
  const resourceName = useContext(ResourceNameContext);
  const navigate = useNavigate();

  const form = useForm<DataType>({
    defaultValues: data || undefined,
    resolver: zodResolver(getResourceSchema(resourceName)),
  });

  const onSave = form.handleSubmit((data) => {
    mainApi
      .put(resourceName + "/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/" + resourceName + "/" + id);
      });
  });

  useEffect(() => {
    data && form.reset(data);
  }, [data]);

  if (isError) return <ErrorPage type="fail" />;

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormDataContext.Provider value={{ data, relatedData }}>
      <FormProvider {...form}>
        <SaveFormContext.Provider value={{ onSave }}>
          <FormPageLayout pageType="edit">{children}</FormPageLayout>
        </SaveFormContext.Provider>
      </FormProvider>
    </FormDataContext.Provider>
  );
};

export default EditPage;
