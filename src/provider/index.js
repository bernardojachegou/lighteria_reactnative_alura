import React, {useState} from 'react';
export const DataContext = React.createContext();

const Provider = ({children}) => {
  const [itensCheckout, setItensCheckout] = useState([]);
  return (
    <DataContext.Provider
      value={{
        itensCheckout,
        addItem: newItem => {
          let copyItensCheckout = [...itensCheckout];
          let filteredItem = copyItensCheckout.find(
            item => item.id == newItem.id,
          );
          if (filteredItem) {
            filteredItem.total = filteredItem.total + 1;
          } else {
            newItem.total = 1;
            copyItensCheckout = [...copyItensCheckout, newItem];
          }
          setItensCheckout(copyItensCheckout);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
