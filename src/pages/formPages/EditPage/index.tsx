import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";

const EditPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  /* const { data } = useGetItem({ id }); */
  /* const form = useForm({ defaultValues: data }); */
  /* const onSave = () => form.handleSubmit((data) => ...);  */

  return children;
  {
    /*
    <FormContext.Provider value={{ ??? }}>
      <SaveContext.Provider value={{ onSave }}>
        <FormPageLayout>
          {children}
        </FormPageLayout>
      </SaveContext.Provider>
    </FormContext.Provider>
    */
  }
};

export default EditPage;
