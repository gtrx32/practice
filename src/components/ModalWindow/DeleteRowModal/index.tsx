import Button from "../../../components/UI/Button";
import ModalWindow from "..";
import s from "./DeleteRowModal.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ModalIsOpenContext from "../../../context/ModalIsOpenContext";
import { remove } from "../../../services/data";
import { useMutation } from "@tanstack/react-query";

const DeleteRowModal = () => {
  const navigate = useNavigate();
  const { target, setModalIsOpen } = useContext(ModalIsOpenContext);

  const mutation = useMutation({
    mutationFn: () => remove(target.resourceName, target.dataId),
    onSuccess: (data) => {
      console.log(data);
      navigate("/" + target.resourceName);
    },
  });

  const onDeleteHandler = () => {
    setModalIsOpen(false);
    mutation.mutate();
  };

  return (
    <ModalWindow className={s.deleteModal}>
      Вы действительно хотите удалить эту запись?
      <div className={s.buttons}>
        <Button onClick={onDeleteHandler}>Да, удалить</Button>
        <Button onClick={() => setModalIsOpen(false)}>Нет, отменить</Button>
      </div>
    </ModalWindow>
  );
};

export default DeleteRowModal;
