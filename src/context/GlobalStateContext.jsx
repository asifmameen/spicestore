import { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openPurchaseForm, setOpenPurchaseForm] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        openContactModal,
        setOpenContactModal,
        openPurchaseForm,
        setOpenPurchaseForm,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
