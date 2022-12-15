import { getCollection, setCollection } from '../firebase';

export const getParticipants = async () => {
  return (await getCollection('participants')) as Record<string, unknown>[];
};

export const getUsers = async () => {
  return (await getCollection('users')) as Record<string, unknown>[];
};

export const isValidParticipant = async (participantId: string) => {
  const participants = await getParticipants();
  return participants.some(({ id }) => id === participantId);
};

export const getUser = async (participantId: string) => {
  const users = await getUsers();
  return users.find(({ id }) => id === participantId);
};

export const getParticipantById = async (participantId: string) => {
  const participants = await getParticipants();
  return participants.find(({ id }) => id === participantId);
};

export const getUnselectedParticipants = async (participant: string) => {
  const users = await getUsers();
  const participants = await getParticipants();

  const userList = users.map(({ manito }) => manito);
  const partList = participants.map(({ name }) => name);
  const doneList = users.map(({ name }) => name);
  const unDoneList = partList.filter((name) => !doneList.includes(name)); // ['dale', 'steph']
  const unselectedList = partList.filter((name) => !userList.includes(name));
  if (unDoneList.length === 2) {
    if (unselectedList.some((name) => !unDoneList.includes(name))) {
      return unDoneList.filter((name) => name !== participant);
    }
  }
  return unselectedList;
};

export const setUserInfo = async (id: string, user: any) => {
  const users = await getUsers();
  const userList = users.map(({ name }) => name);

  if (!userList.includes(user.name)) {
    setCollection('users', id, user);
  }
};

export const getWishList = async (participantName: string) => {
  const users = await getUsers();
  const user = users.find(({ name }) => name === participantName);
  if (user) {
    const { wl1, wl2, wl3 } = user;
    return [wl1, wl2, wl3] as string[];
  }
  return [] as string[];
};
