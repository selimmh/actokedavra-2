import React, { useContext } from "react";
import { useNavigate } from "react-router";

// utils
import { RemoveScroll } from "react-remove-scroll";

// styles
import styles from "./Home.module.scss";

// components
import { Card, Button, Modal, Alert } from "../../components";

// contexts
import { Context } from "../../contexts/context";

function Home() {
  // context
  const { modalOpen, setModalOpen, alert, setAlert } = useContext(Context);

  // navigate
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.filters}>
          <Button onClick={() => setModalOpen(true)} small secondary>
            Sort
          </Button>
          <Button
            onClick={() =>
              setAlert({
                type: "success",
                message: "Successfully added to cart",
              })
            }
            small
            secondary
          >
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
          <Button onClick={() => navigate("./add")} medium primary>
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
      {alert && <Alert type={alert.type} message={alert.message}></Alert>}
    </div>
  );
}

export default Home;
