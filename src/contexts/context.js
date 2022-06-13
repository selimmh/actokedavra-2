import { createContext, useState } from "react";
export const Context = createContext();

const StateProvider = (props) => {
  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // popup state
  const [popupOpen, setPopupOpen] = useState(false);

  // alert state
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

        popupOpen,
        setPopupOpen,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
