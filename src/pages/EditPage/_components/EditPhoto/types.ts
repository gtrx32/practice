import { PhotoType } from "../../types";

export interface EditPhotoProps {
  id: number;
  edit: boolean;
}

export const initialValue: PhotoType = {
  id: 0,
  albumId: 0,
  title: "",
  thumbnailUrl: "",
  url: "",
};