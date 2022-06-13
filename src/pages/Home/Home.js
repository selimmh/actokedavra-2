import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// utils
import { RemoveScroll } from "react-remove-scroll";

// styles
import styles from "./Home.module.scss";

// components
import { Card, Button, Modal, Alert } from "../../components";

// contexts
import { Context } from "../../contexts/context";

// api functions
import { getActors } from "../../api/api";

function Home() {
  // context
  const { modalOpen, setModalOpen, alert, setAlert } = useContext(Context);

  // navigate
  const navigate = useNavigate();

  // get actors
  const [actors, setActors] = useState([]);
  useEffect(() => {
    getActors().then((res) => setActors(res));
  }, []);

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
          {actors?.map((actor) => (
            <Card
              key={actor.id}
              name={actor.name}
              picture={actor.picture}
              occupation={actor.occupation}
              likes={actor.likes}
              description={actor.description}
              hobbies={actor.hobbies}
            />
          ))}
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
