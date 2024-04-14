import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TopPanel from "../../../components/TopPanel";
import Container from "../../../components/UI/Container";
import PageContext from "../../../context/PageContext";
import s from "./CreatePageLayout.module.scss";
import FormDataContext from "../../../context/FormDataContext";
import SaveFormContext from "../../../context/SaveFormContext";
import getResourceSchema from "../../../components/forms/_shared/getResourceSchema";
import { useMutation } from "@tanstack/react-query";
import { create } from "../../../services/data";

interface CreatePageLayoutProps extends PropsWithChildren {
  relatedData: RelatedDataType[];
}

const CreatePageLayout: React.FC<CreatePageLayoutProps> = ({ relatedData, children }) => {
  const { resourceName } = useContext(PageContext);
  const navigate = useNavigate();

  const form = useForm<DataType>({ resolver: zodResolver(getResourceSchema(resourceName)) });

  const onSave = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  const mutation = useMutation({
    mutationFn: (data: DataType) => create(data, resourceName),
    onSuccess: (data) => {
      console.log(data);
      navigate("/" + resourceName);
    },
  });

  return (
    <Container className={s.container}>
      <TopPanel />
      <FormDataContext.Provider value={{ relatedData }}>
        <FormProvider {...form}>
          <SaveFormContext.Provider value={{ onSave }}>{children}</SaveFormContext.Provider>
        </FormProvider>
      </FormDataContext.Provider>
    </Container>
  );
};
export default CreatePageLayout;
