import React, { useContext } from "react";

// utils
import { RemoveScroll } from "react-remove-scroll";

// styles
import styles from "./Home.module.scss";

// components
import { Card, Button, Modal } from "../../components";

// contexts
import { Context } from "../../contexts/context";

function Home() {
  // context
  const { modalOpen, setModalOpen } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.filters}>
          <Button onClick={() => setModalOpen(true)} small secondary>
            Sort
          </Button>
          <Button onClick={() => setModalOpen(true)} small secondary>
            Select
          </Button>
        </div>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.add}>
          <Button medium primary>
            Add new actor
          </Button>
        </div>
      </div>

      {modalOpen && (
        <>
          <Modal>hi from modal</Modal>
          <RemoveScroll />
        </>
      )}
    </div>
  );
}

export default Home;
