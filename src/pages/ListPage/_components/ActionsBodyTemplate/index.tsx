import s from "./ActionsBodyTemplate.module.scss";
import Button from "../../../../components/UI/Button";
import trashcan from "@assets/images/table/trashcan.svg";
import pencil from "@assets/images/table/pencil.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ModalIsOpenContext from "../../../../context/ModalIsOpenContext";

interface ActionsBodyTemplateProps {
  table: string;
  id: number;
}

const ActionsBodyTemplate: React.FC<ActionsBodyTemplateProps> = ({ id, table }) => {
  const { setId, setTable, setModalIsOpen } = useContext(ModalIsOpenContext);

  const onDeleteHandler = () => {
    setTable(table);
    setId(id.toString());
    setModalIsOpen(true);
  };

  return (
    <div className={s.buttons}>
      <Button className={s.button} asChild>
        <Link to={`/${table}/${id}/edit`}>
          <img src={pencil} alt="" />
        </Link>
      </Button>
      <Button onClick={onDeleteHandler} className={s.button}>
        <img src={trashcan} alt="" />
      </Button>
    </div>
  );
};

export default ActionsBodyTemplate;
