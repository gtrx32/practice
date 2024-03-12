import { TodoType } from "../../types";

export interface EditTodoProps {
  id: number;
  edit: boolean;
}

export const initialValue: TodoType = {
  id: 0,
  userId: 0,
  title: "",
  completed: false,
};
