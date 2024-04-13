import { useContext } from "react";
import s from "./ActionsBodyTemplate.module.scss";
import { Link } from "react-router-dom";
import { PencilIcon, TrashcanIcon } from "../../../../../assets/images/icons";
import ModalIsOpenContext from "../../../../../context/ModalIsOpenContext";
import Button from "../../../../../components/UI/Button";
import PageContext from "../../../../../context/PageContext";

interface ActionsBodyTemplateProps {
  dataId: number;
}

const ActionsBodyTemplate: React.FC<ActionsBodyTemplateProps> = ({ dataId }) => {
  const { resourceName } = useContext(PageContext);
  const { setTarget, setModalIsOpen } = useContext(ModalIsOpenContext);

  const onDeleteHandler = () => {
    setTarget({ resourceName, dataId });
    setModalIsOpen(true);
  };

  return (
    <div className={s.buttons}>
      <Button className={s.button} asChild>
        <Link to={`/${resourceName}/${dataId}/edit`}>
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
