import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../data/data.json';
import React, {useContext, useEffect, useState, createContext} from 'react';

const WordBank = createContext(null);

export default function ContextProvider({children}) {
  const [wordBankData, setWordBankData] = useState(null);

  const getData = async () => {
    try {
      const tempdata = await AsyncStorage.getItem('WordBank');
      return tempdata;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };

  const setData = async () => {
    try {
      await AsyncStorage.setItem('WordBank', JSON.stringify(data));
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const storeData = async () => {
    let storedata = await getData();
    if (!storedata) {
      await setData();
      setWordBankData(data);
    } else {
      setWordBankData(JSON.parse(storedata));
    }
  };

  useEffect(() => {
    storeData();
  }, []);

  return <WordBank.Provider value={wordBankData}>{children}</WordBank.Provider>;
}

export function useWordBank() {
  return useContext(WordBank);
}
