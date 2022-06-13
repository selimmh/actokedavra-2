import React, { useState } from "react";
import { useNavigate } from "react-router";

// styles
import styles from "./AddActor.module.scss";

// components
import { Button } from "../../components";

function AddActor() {
  // actor state
  const [actor, setActor] = useState({
    name: "",
    occupation: "",
    hobbies: "",
    description: "",
  });

  //   handle change
  const handleChange = (e) => {
    setActor({ ...actor, [e.target.name]: e.target.value });
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
      // add actor
    }
  };

  // handle blur
  const handleBlur = () => {
    setClicked(false);
  };

  // navigate
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
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

          {/* hobbies */}
          <label>Hobbies</label>
          <input
            className={clicked && !actor.hobbies ? styles.error : ""}
            type="text"
            name="hobbies"
            value={actor.hobbies}
            id="hobbies"
            onChange={handleChange}
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
          {!actor.description.length && clicked && <span>Field required</span>}
        </div>

        <div className={styles.actions}>
          <Button onClick={() => handleSubmit()} primary medium>
            Add new actor
          </Button>

          <button onClick={() => navigate("/")}>
            <span>I changed my mind</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddActor;
