import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// utils
import { RemoveScroll } from "react-remove-scroll";

// styles
import styles from "./Home.module.scss";

// components
import { Card, Button, Modal, Alert, Popup } from "../../components";

// contexts
import { Context } from "../../contexts/context";

// api functions
import { getActors, deleteActor } from "../../api/api";

function Home() {
  // context
  const { modalOpen, setModalOpen, alert, setAlert, popupOpen, setPopupOpen } =
    useContext(Context);

  // navigate
  const navigate = useNavigate();

  // get actors
  const [actors, setActors] = useState([]);
  useEffect(() => {
    getActors().then((res) => setActors(res));
  }, []);

  // actor to delete
  const [actorToDelete, setActorToDelete] = useState(null);

  // actor to edit
  const [actorToEdit, setActorToEdit] = useState(null);

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
              onDelete={() => deleteActor(actor.id)}
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
      {popupOpen && (
        <>
          <Popup>Hello from popup</Popup>
          <RemoveScroll />
        </>
      )}
    </div>
  );
}

export default Home;
