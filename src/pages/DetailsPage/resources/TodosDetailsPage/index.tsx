import s from "./TodosDetailsPage.module.scss";
import DetailsData from "../../_components/DetailsData";

interface TodosDetailsPageProps {
  data: TodoType;
  relatedData: RelatedDataType;
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
        content: data.userId,
        type: "link",
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
