import { PropsWithChildren } from "react";

const CreatePage: React.FC<PropsWithChildren> = ({ children }) => {
  /* const form = useForm({ defaultValues: ??? }); */
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

export default CreatePage;
