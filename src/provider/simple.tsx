import React, {FC, ReactNode, useState} from 'react';
import {SimpleContext} from 'context';

type TProps = {
  children: ReactNode;
};

export const SimpleProvider: FC<TProps> = ({children}) => {
  const [value, setValue] = useState(0);
  return (
    <SimpleContext.Provider value={{value, setValue}}>
      {children}
    </SimpleContext.Provider>
  );
};
