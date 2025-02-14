import { StateCreator } from "zustand";

export interface AuthState {
  user: string | null;
}

export const authSlice: StateCreator<AuthState> = () => ({
  user: null,
});
