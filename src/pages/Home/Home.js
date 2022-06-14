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

// page transition
import { motion } from "framer-motion";

function Home() {
  // context
  const {
    modalOpen,
    setModalOpen,
    alert,
    setAlert,
    popupOpen,
    setPopupOpen,
    setActorToEdit,
    setActorToDelete,
    actorToDelete,
  } = useContext(Context);

  // navigate
  const navigate = useNavigate();

  // get actors
  const [actors, setActors] = useState([]);
  useEffect(() => {
    getActors().then((res) => setActors(res));
  }, []);

  // refetch on delete
  useEffect(() => {
    getActors().then((res) => setActors(res));
  }, [popupOpen]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
    >
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
            {actors?.map((actor) => (
              <Card
                key={actor.id}
                name={actor.name}
                picture={actor.picture}
                occupation={actor.occupation}
                likes={actor.likes}
                description={actor.description}
                hobbies={actor.hobbies}
                onDelete={() => {
                  // deleteActor(actor.id);
                  setPopupOpen(true);
                  setActorToDelete(actor);
                }}
                onEdit={() => {
                  navigate(`/edit/${actor.id}`);
                  setActorToEdit(actor);
                }}
              />
            ))}
          </div>
          <div className={styles.add}>
            {actors?.length <= 6 ? (
              <Button onClick={() => navigate("./add")} medium primary>
                Add new actor
              </Button>
            ) : (
              <Button
                onClick={() =>
                  setAlert({
                    type: "warning",
                    message: "You can add max. 7 actors.",
                  })
                }
                medium
                primary
              >
                Add new actor
              </Button>
            )}
          </div>
        </div>

        {/* modal */}
        {modalOpen && (
          <>
            <Modal>hi from modal</Modal>
            <RemoveScroll />
          </>
        )}

        {/* alert */}
        {alert && <Alert type={alert.type} message={alert.message}></Alert>}

        {/* popup */}
        {popupOpen && (
          <>
            <Popup>
              <div className={styles.delete}>
                <h1>Are you sure?</h1>
                <p>
                  You are about to delete <span>{actorToDelete?.name}</span>
                </p>
                <div>
                  <Button
                    onClick={() => {
                      deleteActor(actorToDelete?.id);
                      setPopupOpen(false);
                      setAlert({
                        type: "success",
                        message: "Actor deleted.",
                      });
                    }}
                    medium
                    secondary
                  >
                    Delete
                  </Button>
                  <Button onClick={() => setPopupOpen(false)} medium primary>
                    Cancel
                  </Button>
                </div>
              </div>
            </Popup>
            <RemoveScroll />
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Home;
