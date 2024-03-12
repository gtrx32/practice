import { CommentType } from "../../types";

export interface EditCommentProps {
  id: number;
  edit: boolean;
}

export const initialValue: CommentType = {
  id: 0,
  postId: 0,
  email: "",
  body: "",
};
