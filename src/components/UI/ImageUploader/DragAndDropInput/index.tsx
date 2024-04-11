import React, { useState } from "react";
import s from "./DragAndDropInput.module.scss";
import clsx from "clsx";
import { DragAndDropInputProps } from "./types";

const DragAndDropInput: React.FC<DragAndDropInputProps> = ({ id, handleFileChange }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileChange(e.dataTransfer.files[0]);
  };

  return (
    <div
      className={clsx(s.dragField, isDragOver && s.dragOver)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label className={s.label} htmlFor={id}>
        Перетащите сюда или нажмите для выбора
      </label>
    </div>
  );
};

export default DragAndDropInput;
