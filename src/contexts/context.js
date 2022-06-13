import { createContext, useState } from "react";
export const Context = createContext();

const StateProvider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [notification, setNotification] = useState("");

  if (notification) {
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }

  return (
    <Context.Provider
      value={{
        modalOpen,
        setModalOpen,
        notification,
        setNotification,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
