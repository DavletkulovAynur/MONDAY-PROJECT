import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { authSlice } from "../app/auth/store";

const useStore = create()(
  immer(devtools((...props) => authSlice(...props)))
);

export { useStore };
