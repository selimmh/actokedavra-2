import React, { useContext } from "react";

// icons
import { RiCloseLine } from "react-icons/ri";

// context
import { Context } from "../../contexts/context";

// styles
import styles from "./Popup.module.scss";

function Popup({ children }) {
  const { setPopupOpen } = useContext(Context);
  return (
    <div className={styles.container}>
      {/* backdrop */}
      <div onClick={() => setPopupOpen(false)} className={styles.backdrop} />
      {/* content */}
      <div className={styles.content}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Popup;
