const allowedTypes = ["image/png", "image/jpeg", "image/webp"];

const maxImageSize = 5 * 1024 * 1024;

export const checkImage = (file: File): boolean => {
  if (!allowedTypes.includes(file.type)) {
    alert("Пожалуйста, загрузите изображение в формате PNG, JPEG или WEBP.");
    return false;
  }
  if (file.size > maxImageSize) {
    alert("Максимальный размер файла - 5 МБ.");
    return false;
  }
  return true;
};
