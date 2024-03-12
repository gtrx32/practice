import { AlbumType } from "../../types";

export interface EditAlbumProps {
  id: number;
}

export const initialValue: AlbumType = {
  id: 0,
  userId: 0,
  title: "",
};
