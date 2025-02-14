import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
// import { authSlice, AuthState } from "../app/auth/store";
import {  IMainStore, mainSlice } from "../app/main/store";

type StoreState =  IMainStore;

const useStore = create<StoreState>()(
  devtools(
    immer((...props) => ({
      // ...authSlice(...props),
      ...mainSlice(...props),
    }))
  )
);

export { useStore };