import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.toggleModalHandler}></div>
  );
};

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};
const Modal = (props) => {
  const portalElement = document.getElementById("modal");
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop toggleModalHandler={props.toggleModalHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </div>
  );
};
export default Modal;
