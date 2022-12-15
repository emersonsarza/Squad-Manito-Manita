import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getUnselectedParticipants, getUser, setUserInfo } from '../utils/db';

interface UserContextProps {
  children: ReactNode;
}

export interface UserContextBaseType {
  code?: string;
  name?: string;
  manito?: string;
}

export interface UserContextValueType extends UserContextBaseType {
  setUser?: (user: UserContextBaseType) => void;
  assignManito?: () => void;
  setDone?: Dispatch<SetStateAction<boolean>>;
  addAnswer?: (answer: string) => void;
}

const defaultValue: UserContextValueType = {};

const UserContext = createContext(defaultValue);

const useUser = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [manito, setManito] = useState('');
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const setUser = useCallback(({ code, name, manito }: UserContextBaseType) => {
    if (code) {
      setCode(code);
    }
    if (name) {
      setName(name);
    }
    if (manito) {
      setManito(manito);
    }
  }, []);

  const addAnswer = useCallback((answer: string) => {
    setAnswers((ans) => [...ans, answer]);
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await getUser(answers[0]);
      if (userInfo) {
        setDone(true);
        setUser({ manito: userInfo.manito as string });
      }
    };
    if (answers[0]) {
      getUserInfo();
    }
  }, [answers, setUser]);

  const assignManito = useCallback(async () => {
    if (done) {
      const unselected = await getUnselectedParticipants(name);
      const filtered = unselected.filter((n) => n !== name);
      const random: number = Math.floor(Math.random() * filtered.length);
      setManito(filtered[random] as string);
    }
  }, [name, done]);

  useEffect(() => {
    if (manito) {
      setUserInfo(code, {
        name,
        wl1: answers[1],
        wl2: answers[2],
        wl3: answers[3],
        manito,
      });
    }
  }, [code, name, manito, answers]);

  const value: UserContextValueType = useMemo(
    () => ({
      code,
      name,
      manito,
      setUser,
      assignManito,
      setDone,
      addAnswer,
    }),
    [code, manito, name, setUser, assignManito, addAnswer]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default useUser;
