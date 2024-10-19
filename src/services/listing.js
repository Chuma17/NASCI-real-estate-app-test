import { functions } from "../firebase.config";
import { httpsCallable } from "firebase/functions";

export const callFunction = async (name, body = undefined) => {
    const getListingFromApi = httpsCallable(functions, name);
    const { data } = await getListingFromApi(body)
    return data
}


  // useEffect(() => {
  //   get()
  // (async () => {
  //   try {
  //     const data = await fetch(
  //       //   `${process.env.REACT_APP_WORLD_NEWS_API_URL}search-news?api-key=${process.env.REACT_APP_WORLD_NEWS_API_KEY}`
  //       //   "https://api.worldnewsapi.com/search-news?source-countries=ca&api-key=6dda304f9a7e42baae6e45c557631f3e"
  //       "https://api.remax.ca/api/v1/listings/distance?size=10&from=0&distance.centreLat=50.4079569&distance.centreLon=-104.6140568&distance.maxDistanceInMetre=10000&distance.sortByProximity=asc&features.priceListMin=379905&features.priceListMax=419895&features.listingTypeIds=100"
  //     );
  //     console.log(data.ok)
  //     if (data.ok) {
  //       console.log(data);
  //       const listings = await data.json();
  //       console.log(listings);

  //       setListings(listings);
  //     }
  //   } catch (error) { }
  // })();
  // }, []);