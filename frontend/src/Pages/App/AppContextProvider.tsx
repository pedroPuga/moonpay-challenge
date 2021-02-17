import React, { createContext, useState } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import { IAppContext, IAppContextProviderProps } from '../../Models/Models';

const AppContext = createContext<IAppContext>({
  loading: false,
  setLoading: () => {},
});

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const contextValue: IAppContext = {
    loading,
    setLoading,
  };
  return (
    <React.Fragment>
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
      <Spinner open={loading} />
    </React.Fragment>
  );
};

export { AppContext };
export default AppContextProvider;
