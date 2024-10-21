// src/stores/Filter-store.ts
import { createStore } from 'zustand/vanilla'

type FilterItem = {
  id: number;
  name: string;
  isUse: boolean
}

export type FilterState = {
  items: FilterItem[]
  placeId: number;
}

export type FilterActions = {
  changeState: (editItem: FilterItem) => void;
  ableItem: () => number[];
  chagePlaceId: (placeId: number) => void;
}

export type FilterStore = FilterState & FilterActions

export const defaultInitState: FilterState = {
  items: [{
    id: 1,
    name: '데이트코스',
    isUse: true,
  }, {
    id: 2,
    name: '분위기',
    isUse: true,
  }, {
    id: 3,
    name: '카페공부',
    isUse: true,
  }],
  placeId: -1
}

export const createFilterStore = (
  initState: FilterState = defaultInitState,
) => {
  return createStore<FilterStore>()((set, get) => ({
    ...initState,
    changeState: (editItem: FilterItem) =>
      set((state) => ({ ...state, items: state.items.map(item => item.id !== editItem.id ? item : editItem) })),
    ableItem: () => get().items.filter(item => item.isUse).map(item => item.id),
    chagePlaceId: (placeId: number) => set((state) => ({ ...state, placeId }))
  }))
}
