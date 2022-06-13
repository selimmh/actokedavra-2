import { createContext, useState } from "react";
export const Context = createContext();

const StateProvider = (props) => {
  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // popup state
  const [popupOpen, setPopupOpen] = useState(false);

  // actor to delete
  const [actorToDelete, setActorToDelete] = useState(null);

  // actor to edit
  const [actorToEdit, setActorToEdit] = useState(null);

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

        actorToDelete,
        setActorToDelete,

        actorToEdit,
        setActorToEdit,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
