import { createContext, useState } from "react";
export const Context = createContext();

const StateProvider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [alert, setAlert] = useState("");

  if (alert) {
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <Context.Provider
      value={{
        modalOpen,
        setModalOpen,
        alert,
        setAlert,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
