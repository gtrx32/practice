import { PropsWithChildren } from "react";

export interface ImageUploaderProps extends PropsWithChildren {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerName: any;
}

const allowedTypes = ["image/png", "image/jpeg", "image/webp"];

const maxImageSize = 5 * 1024 * 1024;

export const checkImage = (file: File): string => {
  if (!allowedTypes.includes(file.type)) {
    return "Неверный формат файла. Допустимые форматы - PNG, JPEG или WEBP";
  }
  if (file.size > maxImageSize) {
    return "Слишком большой файл. Максимально допустимый размер файла - 5 МБ";
  }
  return "";
};
