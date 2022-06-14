import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";

// styles
import styles from "./EditActor.module.scss";

// components
import { Button } from "../../components";

// api functions
import { editActor } from "../../api/api";

// context
import { Context } from "../../contexts/context";

// page transition
import { motion } from "framer-motion";

// icons
import { BiArrowBack } from "react-icons/bi";

function EditActor() {
  // context
  const { setAlert, actorToEdit } = useContext(Context);

  // actor state
  const [actor, setActor] = useState({
    id: actorToEdit.id,
    name: actorToEdit.name,
    picture: actorToEdit.picture,
    occupation: actorToEdit.occupation,
    likes: actorToEdit.likes,
    description: actorToEdit.description,
    hobbies: actorToEdit.hobbies,
  });

  //   handle change
  const handleChange = (e) => {
    setActor({ ...actor, [e.target.name]: e.target.value });
    setClicked(false);
  };

  // submit click listener
  const [clicked, setClicked] = useState(false);

  //   handle submit
  const handleSubmit = () => {
    setClicked(true);
    if (
      actor.name.length &&
      actor.occupation.length &&
      actor.hobbies.length &&
      actor.description.length
    ) {
      editActor(actor).then((res) => {
        navigate("/");
        setAlert({
          type: "success",
          message: "Actor edited successfully",
        });
      });
    }
  };

  // handle blur
  const handleBlur = () => {};

  // navigate
  const navigate = useNavigate();

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
          <button onClick={() => navigate("/")} className={styles.back}>
            <BiArrowBack />
          </button>
          <h1>Add new actor</h1>

          {/* form */}
          {/* name */}
          <div>
            <label>Name</label>
            <input
              className={clicked && !actor.name ? styles.error : ""}
              type="text"
              name="name"
              value={actor.name}
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {/* error */}
            {!actor.name.length && clicked && <span>Field required</span>}

            {/* occupation */}
            <label>Occupation besides acting</label>
            <input
              className={clicked && !actor.occupation ? styles.error : ""}
              type="text"
              name="occupation"
              value={actor.occupation}
              id="occupation"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* error */}
            {!actor.hobbies.length && clicked && <span>Field required</span>}

            {/* hobbies (comma seperated) */}
            <label>Hobbies (comma seperated)</label>
            <input
              className={clicked && !actor.hobbies ? styles.error : ""}
              type="text"
              name="hobbies"
              value={actor.hobbies}
              id="hobbies"
              onChange={(e) =>
                setActor({ ...actor, hobbies: e.target.value.split(",") })
              }
              onBlur={handleBlur}
            />
            {/* error */}
            {!actor.hobbies.length && clicked && <span>Field required</span>}

            {/* description */}
            <label>Short description</label>
            <input
              className={clicked && !actor.description ? styles.error : ""}
              type="text"
              name="description"
              value={actor.description}
              id="desciption"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* error */}
            {!actor.description.length && clicked && (
              <span>Field required</span>
            )}
          </div>

          <div className={styles.actions}>
            <Button onClick={() => handleSubmit()} primary medium>
              Update
            </Button>

            <button
              onClick={() => {
                navigate("/");
                setAlert({
                  type: "danger",
                  message: "Your changes were not saved.",
                });
              }}
            >
              <span>I changed my mind</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EditActor;
