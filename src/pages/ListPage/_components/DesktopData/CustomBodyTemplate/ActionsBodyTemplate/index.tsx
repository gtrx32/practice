import s from "./ActionsBodyTemplate.module.scss";
import Button from "../../../../../../components/UI/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ModalIsOpenContext from "../../../../../../context/ModalIsOpenContext";
import { PencilIcon, TrashcanIcon } from "../../../../../../assets/images/icons";

interface ActionsBodyTemplateProps {
  table: string;
  id: number;
}

const ActionsBodyTemplate: React.FC<ActionsBodyTemplateProps> = ({ id, table }) => {
  const { setTarget, setModalIsOpen } = useContext(ModalIsOpenContext);

  const onDeleteHandler = () => {
    setTarget({ table: table, id: id.toString() });
    setModalIsOpen(true);
  };

  return (
    <div className={s.buttons}>
      <Button className={s.button} asChild>
        <Link to={`/${table}/${id}/edit`}>
          <PencilIcon />
        </Link>
      </Button>
      <Button onClick={onDeleteHandler} className={s.button}>
        <TrashcanIcon />
      </Button>
    </div>
  );
};

export default ActionsBodyTemplate;
