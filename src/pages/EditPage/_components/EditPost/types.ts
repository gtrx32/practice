import { PostType } from "../../types";

export interface EditPostProps {
  id: number;
}

export const initialValue: PostType = {
  id: 0,
  userId: 0,
  title: "",
  body: "",
};
