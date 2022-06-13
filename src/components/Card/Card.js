import React, { useState, useContext } from "react";

// styles
import styles from "./Card.module.scss";

// components
import Button from "../Button/Button";

// context
import { Context } from "../../contexts/context";

function Card({
  name,
  picture,
  occupation,
  likes,
  description,
  hobbies,
  onDelete,
  onEdit,
}) {
  // context
  const { popupOpen, setPopupOpen } = useContext(Context);

  // read more state
  const [readmore, setReadmore] = useState(false);

  // actor to delete
  const [actorToDelete, setActorToDelete] = useState(null);

  // actor to edit
  const [actorToEdit, setActorToEdit] = useState(null);

  return (
    <div className={styles.container}>
      <img src={picture} alt="actor" />
      <div className={styles.content}>
        <h3>{name}</h3>
        <div>
          <p>{occupation}</p>
          <span>{likes}</span>
        </div>
        <ul>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
        <p>{readmore ? description : description.slice(0, 50)}</p>
        <span onClick={() => setReadmore(!readmore)}>Read more</span>
        <Button onClick={onEdit} secondary small>
          Edit
        </Button>
      </div>
      <button onClick={onDelete} className={styles.close}></button>
    </div>
  );
}

export default Card;
