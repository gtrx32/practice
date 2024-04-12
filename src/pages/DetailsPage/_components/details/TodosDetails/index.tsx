import { useContext } from "react";
import DetailsDataContext from "../../../../../context/DetailsDataContext";
import DataRow from "../../../_components/DataRow";

const TodosDetails = () => {
  const { data, relatedData, relatedPath } = useContext(DetailsDataContext);

  return (
    <div>
      <DataRow name="id" content={(data as TodoType).id} type="text" />
      <DataRow name="Автор" content={(relatedData as UserType).name} type="link" url={relatedPath} />
      <DataRow name="Текст" content={(data as TodoType).title} type="text" />
      <DataRow name="Выполнена" content={(data as TodoType).completed} type="boolean" />
    </div>
  );
};

export default TodosDetails;
