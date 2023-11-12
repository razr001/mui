import { create } from "zustand";
import { produce } from "immer";

interface UserStore {
  userInfo: {
    username: string | null;
    id: string;
  };
  login: (username: string, password: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: { username: null, id: "123452" },
  login: (username: string, password: string) => {
    console.log(username, password);
    set(
      produce((state: UserStore) => {
        state.userInfo.username = username;
      }),
    );
  },
}));
