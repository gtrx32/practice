import { AnimatePresence, motion } from "framer-motion";
import s from "./ModalWindow.module.scss";
import { PropsWithChildren, useContext } from "react";
import ModalIsOpenContext from "../../context/ModalIsOpenContext";
import ScrollLock from "react-scrolllock";
import clsx from "clsx";

interface ModalWindowProps extends PropsWithChildren {
  className?: string;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children, className }) => {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);

  return (
    <>
      <ScrollLock isActive={modalIsOpen} />
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={s.wrapper}>
            <div className={s.shadow} onClick={() => setModalIsOpen(false)} />
            <div className={clsx(s.modalBody, className)}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalWindow;
