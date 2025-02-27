import React, { ReactNode, createContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Strings } from 'src/constants';

interface HomeContextInterface {
  gyms: {
    id: number;
    title: string;
    rating: number;
    price: number;
    favorite: boolean;
    date: string;
    popular_clasess: {
      title: string;
      price: number;
      favorite: boolean;
      location: string;
      time: string;
    }[];
  }[];
  setGyms: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        rating: number;
        price: number;
        favorite: boolean;
        date: string;
        popular_clasess: {
          title: string;
          price: number;
          favorite: boolean;
          location: string;
          time: string;
        }[];
      }[]
    >
  >;
}

interface ProviderProps {
  children: ReactNode;
}

export const HomeContext = createContext<HomeContextInterface>(undefined);

export const HomeContextProvider = (props: ProviderProps) => {
  const {children} = props;
  const [gyms, setGyms] = useState<
    {
      id: number;
      title: string;
      rating: number;
      price: number;
      favorite: boolean;
      date: string;
      popular_clasess: {
        title: string;
        price: number;
        favorite: boolean;
        location: string;
        time: string;
      }[];
    }[]
  >(Strings.gyms);

  useEffect(() => {
    intiState();
  }, []);

  const intiState = async () => {
    const updatedGyms = await AsyncStorage.getItem('gyms');
    if (updatedGyms && updatedGyms?.length > 0) {
      setGyms(JSON.parse(updatedGyms));
    }
  };

  return (
    <HomeContext.Provider value={{gyms, setGyms}}>
      {children}
    </HomeContext.Provider>
  );
};
