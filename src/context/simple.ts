import {createContext, Dispatch, SetStateAction} from 'react';

type TSimpleContext = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

export const SimpleContext = createContext<TSimpleContext>({
  value: 0,
  setValue: () => {},
});
