import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import mainApi from "../../../api/api";
import TopPanel from "../../../components/TopPanel";
import Container from "../../../components/UI/Container";
import PageContext from "../../../context/PageContext";
import s from "./EditPageLayout.module.scss";
import SaveFormContext from "../../../context/SaveFormContext";
import FormDataContext from "../../../context/FormDataContext";
import getResourceSchema from "../../../components/forms/_shared/getResourceSchema";

interface EditPageLayoutProps extends PropsWithChildren {
  data: DataType;
  relatedData: RelatedDataType[];
}

const EditPageLayout: React.FC<EditPageLayoutProps> = ({ data, relatedData, children }) => {
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

  return (
    <Container className={s.container}>
      <TopPanel />
      <FormDataContext.Provider value={{ data, relatedData }}>
        <FormProvider {...form}>
          <SaveFormContext.Provider value={{ onSave }}>{children}</SaveFormContext.Provider>
        </FormProvider>
      </FormDataContext.Provider>
    </Container>
  );
};

export default EditPageLayout;
