import Button from "../../../components/UI/Button";
import ModalWindow from "..";
import s from "./DeleteRowModal.module.scss";
import mainApi from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ModalIsOpenContext from "../../../context/ModalIsOpenContext";

interface DeleteRowModalProps {}

const DeleteRowModal: React.FC<DeleteRowModalProps> = () => {
  const navigate = useNavigate();
  const { table, id, setModalIsOpen } = useContext(ModalIsOpenContext);

  const onDeleteHandler = () => {
    mainApi.delete(table + "/" + id, { method: "DELETE" }).then((json) => {
      console.log(json);
      navigate("/" + table);
    });
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
