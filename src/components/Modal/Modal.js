import React, { useContext } from "react";

// icons
import { RiCloseLine } from "react-icons/ri";

// context
import { Context } from "../../contexts/context";

// styles
import styles from "./Modal.module.scss";

function Modal({ children, title }) {
  const { setModalOpen } = useContext(Context);
  return (
    <div className={styles.container}>
      {/* backdrop */}
      <div onClick={() => setModalOpen(false)} className={styles.backdrop} />
      {/* content */}
      <div className={styles.content}>
        <div>
          {/* title */}
          <div className={styles.title}>
            <h2>{title}</h2>
            <button onClick={() => setModalOpen(false)}>
              <RiCloseLine />
            </button>
          </div>
          {/* body */}
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
