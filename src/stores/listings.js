import { create } from 'zustand'

export const useListingStore = create((set) => ({
    listings: undefined,
    setListings: (res) => set({ listings: res }),
}))