import s from "./ActionsBodyTemplate.module.scss";
import Button from "../../../../components/UI/Button";
import trashcan from "../../../../assets/table/trashcan.svg";
import pencil from "../../../../assets/table/pencil.svg";

const ActionsBodyTemplate = () => (
  <div className={s.buttons}>
    <Button className={s.button}>
      <img src={pencil} alt="" />
    </Button>
    <Button className={s.button}>
      <img src={trashcan} alt="" />
    </Button>
  </div>
);

export default ActionsBodyTemplate;
