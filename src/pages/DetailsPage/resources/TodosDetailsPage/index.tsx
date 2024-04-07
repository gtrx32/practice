import s from "./TodosDetailsPage.module.scss";
import DetailsData from "../../DetailsData";

interface TodosDetailsPageProps {
  data: TodoType;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const TodosDetailsPage: React.FC<TodosDetailsPageProps> = ({ data, relatedData, relatedPath }) => (
  <DetailsData
    rows={[
      {
        name: "id:",
        content: data.id,
        type: "text",
      },
      {
        name: "Автор:",
        content: (relatedData as UserType).name,
        type: "link",
        url: relatedPath,
      },
      {
        name: "Текст:",
        content: data.title,
        type: "text",
      },
      {
        name: "Выполнена:",
        content: data.completed,
        type: "boolean",
      },
    ]}
  />
);

export default TodosDetailsPage;
