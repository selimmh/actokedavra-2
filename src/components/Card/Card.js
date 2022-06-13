import React, { useState } from "react";

// styles
import styles from "./Card.module.scss";

// components
import Button from "../Button/Button";

function Card({ name, picture, occupation, likes, description, hobbies }) {
  const [readmore, setReadmore] = useState(false);

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
        <Button secondary small>
          Edit
        </Button>
      </div>
      <button className={styles.close}></button>
    </div>
  );
}

export default Card;
