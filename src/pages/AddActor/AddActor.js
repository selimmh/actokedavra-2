import React, { useState } from "react";

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

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActor({ ...actor, [name]: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Add new actor</h1>

        {/* form */}
        <div>
          <label>Name</label>
          <input type="text" />

          <label>Occupation besides acting</label>
          <input type="text" />

          <label>Hobbies</label>
          <input type="text" />

          <label>Short desciption</label>
          <textarea />
        </div>
        <div className={styles.actions}>
          <Button primary medium>
            Add new actor
          </Button>

          <button>
            <span>I changed my mind</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddActor;
