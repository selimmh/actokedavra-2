import React from "react";

// styles
import styles from "./Home.module.scss";

// components
import { Card, Button } from "../../components";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.filters}>
          <Button small secondary>
            Sort
          </Button>
          <Button small secondary>
            Sort
          </Button>
        </div>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.add}>
          <Button medium primary>
            Add new actor
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
