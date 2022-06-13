import React from "react";

// styles
import styles from "./Test.module.scss";

// components
import { Button } from "../../components";

function Test() {
  return (
    <div className={styles.container}>
      {/* primary */}
      <div>
        <Button primary small>
          Button
        </Button>
        <Button primary medium>
          Button
        </Button>
        <Button primary large>
          Button
        </Button>
      </div>

      {/* primary disabled */}
      <div>
        <Button disabled primary small>
          Button
        </Button>
        <Button disabled primary medium>
          Button
        </Button>
        <Button disabled primary large>
          Button
        </Button>
      </div>

      {/* secondary */}
      <div>
        <Button secondary small>
          Button
        </Button>
        <Button secondary medium>
          Button
        </Button>
        <Button secondary large>
          Button
        </Button>
      </div>

      {/* secondary disabled*/}
      <div>
        <Button disabled secondary small>
          Button
        </Button>
        <Button disabled secondary medium>
          Button
        </Button>
        <Button disabled secondary large>
          Button
        </Button>
      </div>
    </div>
  );
}

export default Test;
