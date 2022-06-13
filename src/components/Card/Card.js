import React, { useState } from "react";

// styles
import styles from "./Card.module.scss";

// components
import Button from "../Button/Button";

// description
const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor labore ullam sapiente recusandae voluptatibus! Eligendi consequuntur nesciunt totam aut?";

function Card() {
  const [readmore, setReadmore] = useState(false);

  return (
    <div className={styles.container}>
      <img src="https://picsum.photos/200/300" alt="actor" />
      <div className={styles.content}>
        <h3>Leondardo Dicaprio</h3>
        <div>
          <p>Actor & Writer</p>
          <span>47</span>
        </div>
        <ul>
          <li>Traveling</li>
          <li>Reading</li>
          <li>Crossword puzzles</li>
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
