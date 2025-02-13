import { State } from 'zustand';

// Тип состояния
interface AuthState {
  user: string | null; // или любой другой тип, в зависимости от данных пользователя
  logout: () => void;
}

// Создаём срез для аутентификации
export const authSlice = (set: State<AuthState>) => ({
  user: null, // начальное состояние
  logout: () => set({ user: null }), // сбросим пользователя на null
});
