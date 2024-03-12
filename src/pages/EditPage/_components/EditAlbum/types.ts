import { AlbumType } from "../../types";

export interface EditAlbumProps {
  id: number;
  edit: boolean;
}

export const initialValue: AlbumType = {
  id: 0,
  userId: 0,
  title: "",
};
