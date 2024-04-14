import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TopPanel from "../../../components/TopPanel";
import Container from "../../../components/UI/Container";
import PageContext from "../../../context/PageContext";
import s from "./EditPageLayout.module.scss";
import SaveFormContext from "../../../context/SaveFormContext";
import FormDataContext from "../../../context/FormDataContext";
import getResourceSchema from "../../../components/forms/_shared/getResourceSchema";
import { useMutation } from "@tanstack/react-query";
import { edit } from "../../../services/data";

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
    mutation.mutate(data);
  });

  const mutation = useMutation({
    mutationFn: (data: DataType) => edit(data, resourceName, dataId),
    onSuccess: (data) => {
      console.log(data);
      navigate("/" + resourceName + "/" + dataId);
    },
  });

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
