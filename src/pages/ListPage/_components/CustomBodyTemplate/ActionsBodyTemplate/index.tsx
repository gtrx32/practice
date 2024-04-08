import { useContext } from "react";
import s from "./ActionsBodyTemplate.module.scss";
import { Link } from "react-router-dom";
import { PencilIcon, TrashcanIcon } from "../../../../../assets/images/icons";
import ModalIsOpenContext from "../../../../../context/ModalIsOpenContext";
import Button from "../../../../../components/UI/Button";
import ResourceNameContext from "../../../../../context/ResourceNameContext";

interface ActionsBodyTemplateProps {
  id: number;
}

const ActionsBodyTemplate: React.FC<ActionsBodyTemplateProps> = ({ id }) => {
  const resourceName = useContext(ResourceNameContext);
  const { setTarget, setModalIsOpen } = useContext(ModalIsOpenContext);

  const onDeleteHandler = () => {
    setTarget({ resourceName, id: id.toString() });
    setModalIsOpen(true);
  };

  return (
    <div className={s.buttons}>
      <Button className={s.button} asChild>
        <Link to={`/${resourceName}/${id}/edit`}>
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