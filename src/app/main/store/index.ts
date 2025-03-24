import { StateCreator } from 'zustand'

export type TMainStore = StateCreator<IMainStore, [], [], IMainStore>

export interface IMainStore {
  count: number
}

const mainSlice: TMainStore = () => ({
  count: 0,
})

const mainSlice2: TMainStore = () => ({
  count: 0,
})

const mainSlice3: TMainStore = () => ({
  count: 0,
})

export { mainSlice }
