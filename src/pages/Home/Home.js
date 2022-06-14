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
import { getActors, deleteActor, deleteAll } from "../../api/api";

// page transition
import { motion } from "framer-motion";

// icons
import { TbMoodSad } from "react-icons/tb";

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

  // sort open
  const [sortOpen, setSortOpen] = useState(false);

  // select open
  const [selectOpen, setSelectOpen] = useState(false);

  // all selected
  const [allSelected, setAllSelected] = useState(false);

  // sort actors by name asc or desc
  const sortActors = (sort) => {
    if (sort === "asc") {
      setActors(actors.sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      setActors(actors.sort((a, b) => b.name.localeCompare(a.name)));
    }
  };

  // handle delete all (not functional)
  const handleDeleteAll = () => {
    if (allSelected) {
      deleteAll().then(() => {
        setSelectOpen(false);
        setAllSelected(false);
        setAlert({
          type: "success",
          message: "All actors deleted.",
        });
      });
    } else {
      setAlert({
        type: "error",
        message: "Please select at least one actor.",
      });
    }
  };

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
      {actors.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.filters}>
              <Button
                onClick={() => {
                  setModalOpen(true);
                  setSortOpen(true);
                  setSelectOpen(false);
                }}
                small
                secondary
              >
                Sort
              </Button>
              <Button
                onClick={() => {
                  setModalOpen(true);
                  setSelectOpen(true);
                  setSortOpen(false);
                }}
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
              {actors?.length <= 7 ? (
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

          {/* modal sort */}
          {modalOpen && sortOpen && (
            <>
              <Modal title={"Select type of sort"}>
                <div className={styles.modalSort}>
                  <Button
                    onClick={() => {
                      sortActors("asc");
                      setModalOpen(false);
                      setAlert({
                        type: "success",
                        message: "Sorted descending.",
                      });
                    }}
                    medium
                    secondary
                  >
                    Ascending
                  </Button>
                  <Button
                    onClick={() => {
                      sortActors("desc");
                      setModalOpen(false);
                      setAlert({
                        type: "success",
                        message: "Sorted ascending",
                      });
                    }}
                    medium
                    secondary
                  >
                    Descending
                  </Button>
                </div>
              </Modal>
              <RemoveScroll />
            </>
          )}

          {/* modal select */}
          {modalOpen && selectOpen && (
            <>
              <Modal title={allSelected ? "All Selected" : "0 Selected"}>
                <div className={styles.modalSelect}>
                  <div>
                    <label htmlFor="delete">Select all</label>
                    <div
                      onClick={() => setAllSelected(!allSelected)}
                      className={`${styles.radio} ${
                        allSelected && styles.active
                      }`}
                    ></div>
                  </div>
                  <Button onClick={handleDeleteAll} medium secondary>
                    Delete
                  </Button>
                </div>
              </Modal>
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
      ) : (
        <div className={styles.noActors}>
          <TbMoodSad className={styles.sad} />
          <span>There are no actors here. Consider adding one.</span>
          <Button onClick={() => navigate("./add")} medium primary>
            Add new actor
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export default Home;
