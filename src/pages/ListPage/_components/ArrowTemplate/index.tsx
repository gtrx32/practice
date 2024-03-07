import s from "./ArrowTemplate.module.scss";
import sideArrowBlack from "@assets/images/table/sideArrowBlack.svg";
import sideArrowGray from "@assets/images/table/sideArrowGray.svg";

interface ArrowTemplateProps {
  isHeader: boolean;
}

const ArrowTemplate: React.FC<ArrowTemplateProps> = ({ isHeader }) => (
  <div className={s.sideArrow}>
    <img src={isHeader ? sideArrowGray : sideArrowBlack} />
  </div>
);

export default ArrowTemplate;
