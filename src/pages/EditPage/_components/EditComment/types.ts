import { CommentType } from "../../types";

export interface EditCommentProps {
  id: number;
}

export const initialValue: CommentType = {
  id: 0,
  postId: 0,
  email: "",
  body: "",
};
