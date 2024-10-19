import { createContext, useContext, useEffect } from "react";
import { callFunction } from "src/services/listing";
import { useListingStore } from "src/stores/listings";

const useListingProvider = createContext();

export function ListingsProvider({ children }) {
  const { listings, setListings } = useListingStore()

  useEffect(() => {
    const getData = async () => {
      const res = await callFunction("getListingFromApi")
      const { results } = res.result
      setListings(results)
    }

    getData()
  }, []);
  return (
    <useListingProvider.Provider value={listings}>
      {children}
    </useListingProvider.Provider>
  );
}

export function useListing() {
  return useContext(useListingProvider);
}
