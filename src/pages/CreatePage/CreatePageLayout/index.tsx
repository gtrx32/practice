import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import mainApi from "../../../api/api";
import TopPanel from "../../../components/TopPanel";
import Container from "../../../components/UI/Container";
import PageContext from "../../../context/PageContext";
import s from "./CreatePageLayout.module.scss";
import FormDataContext from "../../../context/FormDataContext";
import SaveFormContext from "../../../context/SaveFormContext";
import getResourceSchema from "../../../components/forms/_shared/getResourceSchema";

interface CreatePageLayoutProps extends PropsWithChildren {
  relatedData: RelatedDataType[];
}

const CreatePageLayout: React.FC<CreatePageLayoutProps> = ({ relatedData, children }) => {
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
