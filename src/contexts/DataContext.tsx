import useDataState, { DataState } from "hooks/useDataState";
import { createContext, useContext } from "react";

const DataContext = createContext({} as DataState);

export const DataProvider = ({ children }: any) => {
  const dataState = useDataState();

  return (
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
